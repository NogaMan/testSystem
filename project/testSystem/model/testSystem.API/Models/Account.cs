using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        [Required]
        public string Login { get; set; }
        [Required]
        public string HashedPassword { get; set; }
        public string FullName { get; set; }
        public string FieldOfUse { get; set; }

        public virtual List<Test> Tests { get; set; }
        public virtual List<Audience> Audiences { get; set; }

        public Account(string name, string email, string password, string field)
        {
            FullName = name;
            Login = email;
            HashedPassword = password.GetHashCode().ToString();
            FieldOfUse = field;
        }

        public Account() { }
    }
}