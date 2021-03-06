﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class TestTaker
    {
        public int TestTakerId { get; set; }
        public int? AudienceId { get; set; }
        public virtual Audience Audience { get; set; }
		public string EMail { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual ContactInfo ContactInfo { get; set; }

        public TestTaker() { }

        public TestTaker(Audience audience, string email) {
			Audience = audience;
			CreatedDate = DateTime.Now;
			UpdatedDate = DateTime.Now;
			EMail = email;
		}
	}
}