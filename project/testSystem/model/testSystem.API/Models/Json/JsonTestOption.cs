using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Models.Json
{
    public class JsonTestOption
    {
        public int id { get; set; }
        public string text { get; set; }
        public string type { get; set; }
        public bool isRight { get; set; }
    }
}