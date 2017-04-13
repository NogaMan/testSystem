using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonAudienceTestTakerContactInfo
	{
        public int id { get; set; }
		public string lastName { get; set; }
		public char gender { get; set; }
        public string dateOfBirth { get; set; }
        public string companyName { get; set; }
        public string departmentName { get; set; }
        public string positionName { get; set; }
        public string location { get; set; }
        public DateTime createdDate { get; set; }
        public DateTime updatedDate { get; set; }
	}
}