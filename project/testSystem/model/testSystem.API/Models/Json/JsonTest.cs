using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTest
    {
        public int id { get; set; }
        public string name { get; set; }
		public string token { get; set; }

        public Dictionary<string, JsonTestSection> sections { get; set; }
    }
}