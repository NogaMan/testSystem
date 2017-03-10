using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class QuestionType
    {
        public int QuestionTypeId { get; set; }
        [Required]
        public string Name { get; set; }

        public virtual List<Question> Questions { get; set; }
    }
}