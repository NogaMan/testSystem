using System;
using System.Linq;
using System.Net;
using System.Text;
using System.Web.Http.Cors;
using System.Web.Mvc;
using testSystem.API.Classes;
using testSystem.API.Models;

namespace testSystem.API.Controllers
{
    public class MainController : Controller
    {
        private TestSystemAPIContext db = new TestSystemAPIContext();

        public MainController() : base()
        {

        }

        // GET: Main
        public ActionResult Index()
        {
            return Json(new object(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult LogIn(string login, string password)
        {
            var user = db.Accounts.FirstOrDefault((u) => u.Login == login && u.HashedPassword == password);

            if (user != null)
            {
                return Json(new
                {
                    success = true,
                    user = login,
                    token = password
                });
            }
            else
            {
                return Json(new
                {
                    success = false,
                    error = AppConstants.ERROR_WRONG_LOGIN
                });
            }
        }

        [BasicAuthentication]
        public ActionResult GetUserName()
        {
            Account currentUser = AppHelpers.GetCurrentUser();
            return Json(new
            {
                success = true,
                user = currentUser.Login
            }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void Register(string name, string email, string field)
        {
            string password = "123";
            var account = new Account(name, email, password, field);
            db.Accounts.Add(account);
            db.SaveChanges();

            Response.Redirect(AppConstants.UI_URL, true);
        }
    }
}