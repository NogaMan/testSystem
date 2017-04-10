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
        public string Name { get; set; }
        [Required]
        public int TestId { get; set; }
        public virtual Test Test { get; set; }

        public virtual List<Question> Questions { get; set; }

        public Section() { }

        public Section(string name)
        {
            Name = name;
            Questions = new List<Question>();
        }
    }
}