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
	public class AudiencesController : Controller
	{
		private TestSystemAPIContext db = new TestSystemAPIContext();
		private MainController mainController = new MainController();

		// GET: Tests
		public ActionResult Index()
		{
			/*
			var account = AppHelpers.GetCurrentUser();
			var audiences = db.Audiences
				.Where(a => a.AccountId == account.AccountId)
				.Include(a => a.TestTakers.Select(tt => tt.ContactInfo))
				.ToList()
				.Select(a => new JsonAudience)
			var tests = db.Tests
				.Include(a => a.Account)
				.Where(t => t.AccountId == account.AccountId)
				.Select((t) => new
				{
					id = t.TestId,
					name = t.Name
				});
			return Json(new
			{
				success = true,
				tests = tests.ToList()
			},
			JsonRequestBehavior.AllowGet);*/
			throw new NotImplementedException();
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
