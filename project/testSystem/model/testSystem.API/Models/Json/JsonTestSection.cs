using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestSection
    {
        public int id { get; set; }
        public string name { get; set; }
        public Dictionary<string, JsonTestQuestion> questions { get; set; }
    }
}