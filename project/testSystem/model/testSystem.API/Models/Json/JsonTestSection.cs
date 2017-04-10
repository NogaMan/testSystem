using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestSection
    {
        public string Name { get; set; }
        public JsonTestQuestion[] Questions { get; set; }
    }
}