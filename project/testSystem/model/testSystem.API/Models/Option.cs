using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Option
    {
        [Key]
        public int OptionId { get; set; }
        [Required]
        public int QuestionId { get; set; }
        public virtual Question Question { get; set; }
        [Required]
        public string Text { get; set; }
        public bool IsRight { get; set; }
        public string ImageUrl { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }

        public Option() { }

        public Option(string text, bool isRight) {
            Text = text;
            IsRight = isRight;
        }
    }
}