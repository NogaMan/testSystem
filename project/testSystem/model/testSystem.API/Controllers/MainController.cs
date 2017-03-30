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
    [BasicAuthentication]
    public class MainController : Controller
    {
        private testSystemAPIContext db = new testSystemAPIContext();
        private Account currentUser = AppHelpers.GetCurrentUser();

        // GET: Main
        public ActionResult Index()
        {
            return Json(new object(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult LogIn(string login, string password)
        {
            byte[] passwordBytes = System.Text.Encoding.UTF8.GetBytes(password);
            var passwordString = Convert.ToBase64String(passwordBytes);
            var user = db.Accounts.FirstOrDefault((u) => u.Login == login && u.HashedPassword == passwordString);

            if (user != null)
            {
                return Json(new
                {
                    success = true,
                    user = login,
                    token = passwordString
                });
            }
            else
            {
                var error = AppConstants.ERROR_WRONG_LOGIN;
                return Json(new
                {
                    success = false,
                    error = error
                });
            }
        }

        public ActionResult GetUserName()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Register(string name, string email, string field)
        {
            string password = "123";
            var account = new Account(name, email, password, field);
            db.Accounts.Add(account);
            db.SaveChanges();
            AppHelpers.LogIn(account);
            Response.Redirect(AppConstants.UI_URL, true);
        }

        [HttpGet]
        public ActionResult LogOut()
        {
            AppHelpers.LogOut();
            return Json(new
            {
                success = true
            },
            JsonRequestBehavior.AllowGet);
        }
    }
}