using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using testSystem.API.Classes;
using testSystem.API.Models;

namespace testSystem.API.Controllers
{
    [BasicAuthentication]
    public class TestsController : Controller
    {
        private testSystemAPIContext db = new testSystemAPIContext();
        private MainController mainController = new MainController();

        // GET: Tests
        public ActionResult Index()
        {
            //Response.AppendHeader("Access-Control-Allow-Origin", "*");
            if (AppHelpers.IsAuthorized())
            {
                var account = AppHelpers.GetCurrentUser();
                var tests = db.Tests.Include(a => a.Account).Where(t => t.AccountId == account.AccountId);
                return Json(new
                {
                    success = true,
                    tests = tests.ToList()
                },
                JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new
                {
                    success = false,
                    error = AppConstants.ERROR_UNAUTHORIZED
                },
                JsonRequestBehavior.AllowGet);
            }
        }

        // GET: Tests/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Test test = db.Tests.Find(id);
            if (test == null)
            {
                return HttpNotFound();
            }
            return View(test);
        }

        // POST: Tests/Create
        [HttpPost]
        public ActionResult Create([Bind(Include = "TestId,Name,UserId,MinPoints,MaxPoints,CreatedDate,UpdatedDate")] Test test)
        {

            return View(test);
        }

        // POST: Tests/Edit/5
        [HttpPost]
        public ActionResult Edit([Bind(Include = "TestId,Name,UserId,MinPoints,MaxPoints,CreatedDate,UpdatedDate")] Test test)
        {
            throw new NotImplementedException();
        }

        // POST: Tests/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
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
