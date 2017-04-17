using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonAudience
	{
        public int id { get; set; }
        public string name { get; set; }
		public Dictionary<string, JsonAudienceTestTaker> testTakers { get; set; }
    }
}