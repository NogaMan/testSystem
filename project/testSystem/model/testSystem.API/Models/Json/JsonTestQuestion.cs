using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestQuestion
    {
        public string Text { get; set; }
        public string Type { get; set; }
        public JsonTestOption[] Answers { get; set; }
    }
}