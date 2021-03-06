﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace testSystem.API.Models
{
    public class TestSystemAPIContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public TestSystemAPIContext() : base("name=testSystemAPIContext")
        {
        }

        public System.Data.Entity.DbSet<testSystem.API.Models.Test> Tests { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.TestTaker> TestTakers { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.TestParticipation> TestParticipations { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.ContactInfo> ContactInfos { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.Option> Options { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.Question> Questions { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.Section> Sections { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.Audience> Audiences { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.Account> Accounts { get; set; }
        public System.Data.Entity.DbSet<testSystem.API.Models.TestParticipationAnswer> TestParticipationAnswers { get; set; }


	}
}
