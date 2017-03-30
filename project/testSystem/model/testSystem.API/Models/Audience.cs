using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class Audience
    {
        public int AudienceId { get; set; }
        [Required]
        public string Name { get; set; }
        public int CreatedAccountId { get; set; }
        public virtual Account CreatedAccount { get; set; }

        public virtual List<TestTaker> TestTakers { get; set; }

        public Audience() { }
    }
}