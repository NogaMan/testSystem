using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Option
    {
        [Key]
        public int OptionId { get; set; }
        [Required]
        public int OptionTypeId { get; set; }
        public virtual OptionType OptionType { get; set; }
        [Required]
        public int QuestionId { get; set; }
        public virtual Question Question { get; set; }
        [Required]
        public string Text { get; set; }
        public string ImageUrl { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }
    }
}