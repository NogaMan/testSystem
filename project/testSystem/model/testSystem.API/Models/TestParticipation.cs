using System;
using System.Collections.Generic;

namespace testSystem.API.Models
{
    public class TestParticipation
    {
        public int ParticipationID { get; set; }
        public int TestId { get; set; }
        public virtual Test Test { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public string AuthToken { get; set; }
        public DateTime DateInvited { get; set; }
        public bool Canceled { get; set; }
        public DateTime DateCanceled { get; set; }
        public bool Passed { get; set; }
        public DateTime DatePassed { get; set; }
        public int Result { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }
    }
}