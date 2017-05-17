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

		[HttpGet]
		public ActionResult GetTest(string token)
		{
			try
			{
				if (token == null)
				{
					return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
				}
				db.Database.Log = Console.WriteLine;
				var realParticipation = db.TestParticipations
					.Where(p => p.AuthToken == token)
					.FirstOrDefault();
				if (realParticipation == null)
				{
					return HttpNotFound();
				}
				var realTest = realParticipation.Test;
				if (realParticipation.Canceled == true)
				{
					return Json(new
					{
						success = false,
						error = "Test is Canceled"
					}, JsonRequestBehavior.AllowGet);
				}
				if (realParticipation.Passed == true)
				{
					return Json(new
					{
						success = false,
						error = "Test has already been held. Result: " + realParticipation.Result.ToString()
					}, JsonRequestBehavior.AllowGet);
				}
				var testId = realTest.TestId;
				var test = AppHelpers.GetFullTestById(testId, db);
				return Json(new
				{
					success = true,
					test = test
				}, JsonRequestBehavior.AllowGet);
			}
			catch(Exception)
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
							if (answer.isRight)
							{
								TestParticipationAnswer answerToAdd = new TestParticipationAnswer(participation, realQuestion, realOption, isWrongAnswer);
								db.TestParticipationAnswers.Add(answerToAdd);
							}
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
					success = true,
					result = result
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
