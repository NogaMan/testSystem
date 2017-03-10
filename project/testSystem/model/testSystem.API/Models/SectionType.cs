using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class SectionType
    {
        public int SectionTypeId { get; set; }
        [Required]
        public string Name { get; set; }

        public virtual List<Section> Sections { get; set; }
    }
}