﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testSystem.API.Models
{
    public class Test
    {
        public int TestId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int AccountId { get; set; }
        public virtual Account Account { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public virtual List<Section> Sections { get; set; }
        public virtual List<TestParticipation> TestParticipations { get; set; }

        public Test()
        {
        }

        public Test(string name, Account account)
        {
            Name = name;
            Account = account;
            CreatedDate = UpdatedDate = DateTime.Now;
            Sections = new List<Section>();
        }
    }
}