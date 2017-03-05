using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Option
    {
        public int OptionId { get; set; }
        public int OptionTypeId { get; set; }
        public virtual OptionType OptionType { get; set; }
        public int QuestionId { get; set; }
        public virtual Question Question { get; set; }
        public string Text { get; set; }
        public string ImageUrl { get; set; }
    }
}