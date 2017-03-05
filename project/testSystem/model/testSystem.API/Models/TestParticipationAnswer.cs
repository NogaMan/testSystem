using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class TestParticipationAnswer
    {
        public int TestParticipationAnswerId { get; set; }
        public int TestParticipationId { get; set; }
        public virtual TestParticipation TestParticipation { get; set; }
        public int QuestionId { get; set; }
        public int OptionId { get; set; }
    }
}