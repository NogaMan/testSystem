using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Test
    {
        public int TestId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public int MinPoints { get; set; }
        [Required]
        public DateTime CreatedDate  { get; set; }
        public DateTime UpdatedDate  { get; set; }

        public virtual List<Section> Sections { get; set; }
        public virtual List<TestParticipation> TestParticipations { get; set; }
    }
}