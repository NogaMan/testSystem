using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Login { get; set; }
        public string HashedPassword { get; set; }
        public int CreatedUserId { get; set; }
        public virtual User CreatedUser {get;set;}
        public int ContactInfoId { get; set; }
        public virtual ContactInfo ContactInfo { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual List<TestParticipation> TestParticipations { get; set; }
    }
}