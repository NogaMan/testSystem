using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        [Required]
        public int QuestionTypeId { get; set; }
        public virtual QuestionType QuestionType { get; set; }
        [Required]
        public int SectionId { get; set; }
        public virtual Section Section { get; set; }
        [Required]
        public string PreHTML { get; set; }
        [Required]
        public bool MultipleChoice { get; set; }
        public string TextRightAnswer { get; set; }
        [Required]
        public int Score { get; set; }
        public int LoseScore { get; set; }

        public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }

        public Question() { }
    }
}