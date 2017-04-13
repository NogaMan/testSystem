using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class TestParticipation
    {
        public int TestParticipationID { get; set; }
        [Required]
        public int TestId { get; set; }
        public virtual Test Test { get; set; }
        [Required]
        public int TestTakerId { get; set; }
        public virtual TestTaker TestTaker { get; set; }
        [Required]
        public string AuthToken { get; set; }
        [Required]
        public DateTime DateInvited { get; set; }
        public bool? Canceled { get; set; }
        public DateTime? DateCanceled { get; set; }
        public bool? Passed { get; set; }
        public DateTime? DatePassed { get; set; }
        public int? Result { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }

        public TestParticipation() { }

		public void SetComplete(int result)
		{
			Passed = true;
			DatePassed = DateTime.Now;
			Result = result;
		}
    }
}