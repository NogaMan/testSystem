using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonAudienceTestTaker
	{
        public int id { get; set; }
        public int audienceId { get; set; }
        public string email { get; set; }
		public JsonAudienceTestTakerContactInfo contactInfo { get; set; }
}
}