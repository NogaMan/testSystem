using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class ContactInfo
    {
        public int ContactInfoId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string CompanyName { get; set; }
        public string DepartmentName { get; set; }
        public string PositionName { get; set; }
        public string Location { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual List<User> Users { get; set; }
    }
}