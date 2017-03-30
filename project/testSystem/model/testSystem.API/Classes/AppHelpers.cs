using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using testSystem.API.Models;

namespace testSystem.API.Classes
{
    public class AppHelpers
    {
        public static bool IsAuthorized()
        {
            var user = GetCurrentUser();
            return user != null;
        }
       
        public static Account GetCurrentUser()
        {
            return ((AccountIdentity)HttpContext.Current.User.Identity).User;
        }
    }
}