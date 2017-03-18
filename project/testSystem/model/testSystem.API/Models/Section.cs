using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class Section
    {
        public int SectionId { get; set; }
        [Required]
        public int SectionTypeId { get; set; }
        public virtual SectionType SectionType { get; set; }
        [Required]
        public int TestId { get; set; }
        public virtual Test Test { get; set; }
        public string PreHTML { get; set; }
        public string TextMask { get; set; }

        public virtual List<Question> Questions { get; set; }
    }
}