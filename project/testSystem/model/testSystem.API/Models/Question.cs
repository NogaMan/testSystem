using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public int QuestionTypeId { get; set; }
        public virtual QuestionType QuestionType { get; set; }
        public int SectionId { get; set; }
        public virtual Section Section { get; set; }
        public string PreHTML { get; set; }
        public bool MultipleChoice { get; set; }
        public string TextRightAnswer { get; set; }
        public int Score { get; set; }
        public int LoseScore { get; set; }
    }
}