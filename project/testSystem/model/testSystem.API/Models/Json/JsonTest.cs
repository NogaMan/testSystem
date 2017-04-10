using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTest
    {
        public string Name { get; set; }
        public JsonTestSection[] Sections { get; set; }
    }
}