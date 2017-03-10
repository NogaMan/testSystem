using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class User
    {
        public int UserId { get; set; }
        [Required]
        public string Login { get; set; }
        [Required]
        public string HashedPassword { get; set; }
        public int CreatedUserId { get; set; }
        public virtual User CreatedUser { get; set; }
        public int ContactInfoId { get; set; }
        public virtual ContactInfo ContactInfo { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}