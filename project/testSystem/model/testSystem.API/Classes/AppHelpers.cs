using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using testSystem.API.Models;

namespace testSystem.API.Classes
{
    public class AppHelpers
    {
        public static void LogIn(Account user)
        {
            HttpContext.Current.Session["currentUser"] = user;
        }
        public static void LogOut()
        {
            HttpContext.Current.Session.Remove("currentUser");
        }

        public static bool IsAuthorized()
        {
            var user = GetCurrentUser();
            return user != null;
        }
       
        public static Account GetCurrentUser()
        {
            return HttpContext.Current.Session["currentUser"] as Account;
        }
    }
}