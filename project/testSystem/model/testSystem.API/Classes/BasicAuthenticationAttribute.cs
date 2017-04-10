using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using testSystem.API.Models;

namespace testSystem.API.Classes
{
    public class BasicAuthenticationAttribute : ActionFilterAttribute
    {
        private TestSystemAPIContext db = new TestSystemAPIContext();
        public override void OnActionExecuting(ActionExecutingContext actionContext)
        {
            var authToken = actionContext.HttpContext.Request.Headers["Authorization"];
            if (authToken == null)
            {
                actionContext.Result = new HttpUnauthorizedResult();
                actionContext.HttpContext.Response.Headers.Add("WWW-Authenticate", "Basic realm=\"" + AppConstants.UI_URL + "\"");
            }
            else
            {
                try
                {
                    string decodedToken = Encoding.UTF8.GetString(Convert.FromBase64String(authToken));
                    string login = decodedToken.Split(':')[0];
                    string pass = decodedToken.Split(':')[1];

                    var account = db.Accounts.FirstOrDefault((a) => a.HashedPassword == pass && a.Login == login);

                    if (account == null)
                    {
                        actionContext.Result = new HttpUnauthorizedResult();
                    }
                    HttpContext.Current.User = new GenericPrincipal(new AccountIdentity(account), new string[] { });
                }
                catch(Exception)
                {
                    actionContext.Result = new HttpUnauthorizedResult();
                }
            }
        }
    }
}