using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestParticipation
	{
        public int id { get; set; }
        public string fullName { get; set; }
        public string group { get; set; }
		public string email { get; set; }
		public bool passed { get; set; }
		public int? result { get; set; }
		public string link { get; set; }
    }
}