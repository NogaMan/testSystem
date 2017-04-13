using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using testSystem.API.Classes;
using testSystem.API.Models;
using testSystem.API.Models.Json;

namespace testSystem.API.Controllers
{ 
	public class ExamController : Controller
	{
		private TestSystemAPIContext db = new TestSystemAPIContext();
		private MainController mainController = new MainController();

		[HttpGet]
		public ActionResult GetTest(string token)
		{
			try
			{
				if (token == null)
				{
					return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
				}
				db.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
				var testId = db.TestParticipations
					.Include(p => p.Test)
					.Where(p => p.AuthToken == token && p.Canceled != true && p.Passed != true)
					.Select(p => p.Test.TestId)
					.FirstOrDefault();
				var test = db.Tests
					.Include(t => t.Sections.Select(s => s.Questions.Select(q => q.Options)))
					.Where(t => t.TestId == testId)
					.ToList()
					.Select(t => new JsonTest
					{
						id = t.TestId,
						name = t.Name,
						sections = t.Sections.ToDictionary(s => s.SectionId.ToString(), s => new JsonTestSection
						{
							id = s.SectionId,
							name = s.Name,
							questions = s.Questions.ToDictionary(q => q.QuestionId.ToString(), q => new JsonTestQuestion
							{
								id = q.QuestionId,
								text = q.Text,
								type = q.Type,
								answers = q.Options.ToDictionary(a => a.OptionId.ToString(), a => new JsonTestOption
								{
									id = a.OptionId,
									type = q.Type,
									text = a.Text
								})
							})
						})
					})
					.FirstOrDefault();
				if (test == null)
				{
					return HttpNotFound();
				}
				return Json(new
				{
					succes = true,
					test = test
				}, JsonRequestBehavior.AllowGet);
			}
			catch(Exception exc)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
		}

		[HttpPost]
		public ActionResult PostAnswers(JsonTest test)
		{
			try
			{
				TestParticipation participation = db.TestParticipations.Where(p => p.AuthToken == test.token).FirstOrDefault();
				Test realTest = db.Tests.Include(t => t.Sections.Select(s => s.Questions.Select(q => q.Options)))
					.FirstOrDefault(t => t.TestId == test.id);

				int numberOfQuestion = 0;
				int numberOfRightAnswers = 0;
				foreach (var section in test.sections.Values)
				{
					Section realSection = realTest.Sections.FirstOrDefault(s => s.SectionId == section.id);
					foreach (var question in section.questions.Values)
					{
						Question realQuestion = realSection.Questions.FirstOrDefault(q => q.QuestionId == question.id);
						string type = realQuestion.Type;
						bool allRight = true;
						foreach (var answer in question.answers.Values)
						{
							Option realOption = realQuestion.Options.FirstOrDefault(o => o.OptionId == answer.id);
							bool isWrongAnswer = realOption.IsRight != answer.isRight;
							if (isWrongAnswer)
							{
								allRight = false;
							}
							
							TestParticipationAnswer answerToAdd = new TestParticipationAnswer(participation, realQuestion, realOption, isWrongAnswer);
							db.TestParticipationAnswers.Add(answerToAdd);
						}
						numberOfQuestion++;
						if (allRight)
						{
							numberOfRightAnswers++;
						}
					}
				}
				int result = 0;
				if (numberOfQuestion != 0)
				{
					result = 100 * numberOfRightAnswers / numberOfQuestion;
				}
				participation.SetComplete(result);
				db.SaveChanges();
				return Json(new
				{
					succes = true
				});
			}
			catch(Exception exc)
			{
				throw exc;
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
		}
	}
}
