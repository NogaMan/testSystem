using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class TestParticipationAnswer
    {
        public int TestParticipationAnswerId { get; set; }
        [Required]
        public int TestParticipationId { get; set; }
        public virtual TestParticipation TestParticipation { get; set; }
		public int QuestionId { get; set; }
		public virtual Question Question { get; set; }
		public int OptionId { get; set; }
        public virtual Option Option { get; set; }
		public bool IsWrongAnswer { get; set; }

		public TestParticipationAnswer(TestParticipation testParticipation, Question question, Option option, bool isWrong) {
			TestParticipation = testParticipation;
			Question = question;
			Option = option;
			IsWrongAnswer = isWrong;
		}
    }
}