using System.Linq;
using System.Web.Http.Cors;
using System.Web.Mvc;
using testSystem.API.Classes;
using testSystem.API.Models;

namespace testSystem.API.Controllers
{
    [EnableCors("*", "*", "*")]
    public class MainController : Controller
    {
        private const string APP_URL = "http://localhost:8084/";
        private testSystemAPIContext db = new testSystemAPIContext();
        // GET: Main
        public ActionResult Index()
        {
            return Json(new object(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult LogIn(string login, string password)
        {
            var user = db.Accounts.FirstOrDefault((u) => u.Login == login && u.HashedPassword == password.GetHashCode().ToString());
            if (user != null)
            {
                AppHelpers.LogIn(user);
                return Json(new
                {
                    success = true,
                    user = login
                },
                JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new
                {
                    success = false,
                    error = AppConstants.ERROR_WRONG_LOGIN
                },
                JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public void Register(string name, string email, string field)
        {
            string password = "123";
            var account = new Account(name, email, password, field);
            db.Accounts.Add(account);
            db.SaveChanges();
            AppHelpers.LogIn(account);
            Response.Redirect(APP_URL, true);
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