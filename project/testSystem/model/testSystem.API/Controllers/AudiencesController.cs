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

		[HttpGet]
		public ActionResult Index()
		{
			var account = AppHelpers.GetCurrentUser();
			var audiences = db.Audiences
				.Where(a => a.AccountId == account.AccountId)
				.Include(a => a.TestTakers.Select(tt => tt.ContactInfo))
				.ToList()
				.Select(a => new JsonAudience
				{
					id = a.AudienceId,
					name = a.Name,
					testTakers = a.TestTakers.ToDictionary(tt => tt.TestTakerId.ToString(), tt => new JsonAudienceTestTaker
					{
						id = tt.TestTakerId,
						email = tt.EMail,
						contactInfo = new JsonAudienceTestTakerContactInfo
						{
							id = tt.TestTakerId,
							firstName = tt.ContactInfo.FirstName,
							lastName = tt.ContactInfo.LastName,
							gender = tt.ContactInfo.Gender,
							dateOfBirth = tt.ContactInfo.DateOfBirth.ToString("dd.MM.yy"),
							companyName = tt.ContactInfo.CompanyName,
							departmentName = tt.ContactInfo.DepartmentName,
							positionName = tt.ContactInfo.PositionName,
							location = tt.ContactInfo.Location
						}
					})
				});
			return Json(new
			{
				success = true,
				audiences = audiences.ToDictionary(a => a.id.ToString(), a => a)
			}, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult Create(string name)
		{
			try
			{
				int currentAccountId = AppHelpers.GetCurrentUser().AccountId;
				Account currentAccount = db.Accounts.FirstOrDefault((a) => a.AccountId == currentAccountId);
				Audience audienceToAdd = new Audience(name, currentAccount);
				db.Audiences.Add(audienceToAdd);
				db.SaveChanges();
				return Json(new
				{
					success = true,
					id = audienceToAdd.AudienceId
				});
			}
			catch (Exception)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
		}

		public ActionResult AddTestTaker(JsonAudienceTestTaker testTaker)
		{
			try
			{
				var audience = db.Audiences.FirstOrDefault(a => a.AudienceId == testTaker.audienceId);
				if (audience == null)
				{
					throw new Exception("Aiduence not found");
				}
				var testTakerToAdd = new TestTaker(audience, testTaker.email);
				var contactInfoToAdd = new ContactInfo(testTaker.contactInfo);
				testTakerToAdd.ContactInfo = contactInfoToAdd;
				db.ContactInfos.Add(contactInfoToAdd);
				db.TestTakers.Add(testTakerToAdd);
				db.SaveChanges();
				return Json(new
				{
					success = true,
					id = testTakerToAdd.TestTakerId
				});
			} catch(Exception exc)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
		}
		

		public ActionResult Update(JsonAudience audience)
		{
			//http://stackoverflow.com/questions/15336248/entity-framework-5-updating-a-record
			throw new NotImplementedException();
		}


		[HttpPost]
		public ActionResult Delete(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
			var audienceToDelete = db.Audiences.FirstOrDefault(a => a.AudienceId == id);
			if (audienceToDelete != null)
			{
				foreach(var testTaker in audienceToDelete.TestTakers)
				{
					db.ContactInfos.Remove(testTaker.ContactInfo);
				}
				db.TestTakers.RemoveRange(audienceToDelete.TestTakers);
				db.Audiences.Remove(audienceToDelete);
				db.SaveChanges();
				return Json(new
				{
					success = true
				});
			}
			else
			{
				return new HttpStatusCodeResult(HttpStatusCode.NotFound);
			}

		}

		[HttpPost]
		public ActionResult DeleteTestTaker(int? id)
		{
			if (id == null)
			{
				return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
			}
			var testTakerToDelete = db.TestTakers.FirstOrDefault(tt => tt.TestTakerId == id);
			if (testTakerToDelete != null)
			{
				db.ContactInfos.Remove(testTakerToDelete.ContactInfo);
				db.TestTakers.Remove(testTakerToDelete);
				db.SaveChanges();
				return Json(new
				{
					success = true
				});
			} else {
				return new HttpStatusCodeResult(HttpStatusCode.NotFound);
			}
				
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
