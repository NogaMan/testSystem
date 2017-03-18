using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class TestTaker
    {
        public int TestTakerId { get; set; }
        [Required]
        public int CreatedAccountId { get; set; }
        public virtual Account CreatedAccount { get; set; }
        public int? AudienceId { get; set; }
        public virtual Audience Audience { get; set; }
        public int ContactInfoId { get; set; }
        public virtual ContactInfo ContactInfo { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}