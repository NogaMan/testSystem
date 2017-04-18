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
	[BasicAuthentication]
	public class TestsController : Controller
	{
		private TestSystemAPIContext db = new TestSystemAPIContext();
		private MainController mainController = new MainController();

		// GET: Tests
		public ActionResult Index()
		{
			var account = AppHelpers.GetCurrentUser();
			var tests = db.Tests
				.Include(a => a.Account)
				.Where(t => t.AccountId == account.AccountId)
				.Select((t) => new
				{
					id = t.TestId,
					name = t.Name
				})
				.ToDictionary(t => t.id.ToString(), t => t);
			return Json(new
			{
				success = true,
				tests = tests.ToList()
			},
			JsonRequestBehavior.AllowGet);
		}

		// GET: Tests/Details/5
		public ActionResult Details(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
			var test = db.Tests.FirstOrDefault((t) => t.TestId == id);
			if (test == null)
			{
				return HttpNotFound();
			}
			return View(test);
		}

		// POST: Tests/Create
		[HttpPost]
		public ActionResult Create(JsonTest test)
		{
			try
			{
				int currentAccountId = AppHelpers.GetCurrentUser().AccountId;
				Account currentAccount = db.Accounts.FirstOrDefault((a) => a.AccountId == currentAccountId);
				Test testToAdd = new Test(test.name, currentAccount);
				foreach (var section in test.sections.Values)
				{
					Section sectionToAdd = new Section(section.name);
					foreach (var question in section.questions.Values)
					{
						Question questionToAdd = new Question(question.text, question.type);
						foreach (var option in question.answers.Values)
						{
							Option optionToAdd = new Option(option.text, option.isRight);
							questionToAdd.Options.Add(optionToAdd);
							db.Options.Add(optionToAdd);
						}
						sectionToAdd.Questions.Add(questionToAdd);
						db.Questions.Add(questionToAdd);
					}
					testToAdd.Sections.Add(sectionToAdd);
					db.Sections.Add(sectionToAdd);
				}
				db.Tests.Add(testToAdd);
				db.SaveChanges();
				return Json(new
				{
					success = true
				});
			}
			catch (Exception)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
		}

		// POST: Tests/Edit/5
		[HttpPost]
		public ActionResult Edit([Bind(Include = "TestId,Name,UserId,MinPoints,MaxPoints,CreatedDate,UpdatedDate")] Test test)
		{
			throw new NotImplementedException();
		}

		// POST: Tests/Delete/5
		[HttpPost]
		public ActionResult Delete(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}

			var test = db.Tests.FirstOrDefault((t) => t.TestId == id);
			if (test == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.NotFound);
			}
			db.Tests.Remove(test);
			db.SaveChanges();
			return Json(new
			{
				success = true
			});
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				db.Dispose();
			}
			base.Dispose(disposing);
		}
	}
}
