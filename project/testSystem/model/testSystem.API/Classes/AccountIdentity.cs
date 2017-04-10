using System;
using System.Security.Principal;
using testSystem.API.Models;

namespace testSystem.API.Classes
{
    public class AccountIdentity : IIdentity
    {
        public Account User
        {
            get;
            private set;
        }
        public AccountIdentity(Account user)
        {
            if (user == null)
            {
                throw new ArgumentNullException("user");
            }
            User = user;
        }

        public string Name
        {
            get
            {
                return User.Login;
            }
        }

        public string AuthenticationType
        {
            get
            {
                return "Basic";
            }
        }

        public bool IsAuthenticated
        {
            get
            {
                return true;
            }
        }
    }
}