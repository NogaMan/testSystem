using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        [Required]
        public int SectionId { get; set; }
        public virtual Section Section { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public bool MultipleChoice { get; set; }
        [Required]
        public int Score { get; set; }
        public int LoseScore { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }
        public virtual List<Option> Options { get; set; }

        public Question() { }

        public Question(string text, string type)
        {
            Text = text;
            if (type == "multiple")
            {
                MultipleChoice = true;
            }
            else
            {
                MultipleChoice = false;
            }
            Score = 1;
            LoseScore = 0;
            Options = new List<Option>();
        }
    }
}