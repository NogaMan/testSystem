using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class OptionType
    {
        public int OptionTypeId { get; set; }
        public string Name { get; set; }

        public virtual List<Option> Options { get; set; }
    }
}