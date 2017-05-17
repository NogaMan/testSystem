using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestParticipationsInfo
	{
        public int testId { get; set; }
        public string testName { get; set; }
		public int sectionsCount { get; set; }
		public int passedCount { get; set; }
		public int invitedCount { get; set; }
		public int? averageResult { get; set; }

		public Dictionary<string, JsonTestParticipation> participations { get; set; }
		public Dictionary<string, JsonTestAvailableGroup> availableGroups { get; set; }
    }
}