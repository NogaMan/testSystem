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
        [Required]
        public int OptionId { get; set; }
        public virtual Option Option { get; set; }
    }
}