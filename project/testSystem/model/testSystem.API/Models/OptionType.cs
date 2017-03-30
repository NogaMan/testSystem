using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class OptionType
    {
        public int OptionTypeId { get; set; }
        [Required]
        public string Name { get; set; }

        public virtual List<Option> Options { get; set; }

        public OptionType() { }
    }
}