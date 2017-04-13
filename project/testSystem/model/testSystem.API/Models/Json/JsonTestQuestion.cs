using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestQuestion
    {
        public int id { get; set; }
        public string text { get; set; }
        public string type { get; set; }
        public Dictionary<string, JsonTestOption> answers { get; set; }
    }
}