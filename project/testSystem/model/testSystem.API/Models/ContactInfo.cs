using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using testSystem.API.Models.Json;

namespace testSystem.API.Models
{
	public class ContactInfo
	{
		[Key, ForeignKey("TestTaker")]
		public int TestTakerId { get; set; }
		[Required]
		public string FirstName { get; set; }
		[Required]
		public string LastName { get; set; }
		public string Gender { get; set; }
		public DateTime DateOfBirth { get; set; }
		[Required]
		public string CompanyName { get; set; }
		public string DepartmentName { get; set; }
		public string PositionName { get; set; }
		public string Location { get; set; }
		[Required]
		public DateTime CreatedDate { get; set; }
		public DateTime UpdatedDate { get; set; }


		public virtual TestTaker TestTaker { get; set; }

		public ContactInfo() { }

		public ContactInfo(JsonAudienceTestTakerContactInfo contactInfo)
		{
			FirstName = contactInfo.firstName;
			LastName = contactInfo.lastName;
			Gender = contactInfo.gender;
			DateOfBirth = DateTime.ParseExact(contactInfo.dateOfBirth, "dd.MM.yyyy", null);
			CompanyName = contactInfo.companyName;
			DepartmentName = contactInfo.departmentName;
			PositionName = contactInfo.positionName;
			Location = contactInfo.location;
			CreatedDate = DateTime.Now;
			UpdatedDate = DateTime.Now;
		}
	}
}