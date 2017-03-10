using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class ContactInfo
    {
        [Key, ForeignKey("User")]
        public int ContactInfoId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string CompanyName { get; set; }
        public string DepartmentName { get; set; }
        public string PositionName { get; set; }
        public string Location { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual User User { get; set; }
    }
}