using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using testSystem.API.Models;
using testSystem.API.Models.Json;

namespace testSystem.API.Classes
{
	public class AppHelpers
	{
		public static bool IsAuthorized()
		{
			var user = GetCurrentUser();
			return user != null;
		}

		public static Account GetCurrentUser()
		{
			return ((AccountIdentity)HttpContext.Current.User.Identity).User;
		}

		public static JsonTest GetFullTestById(int id, TestSystemAPIContext context)
		{
			var test = context.Tests
					.Where(t => t.TestId == id)
					.ToList()
					.Select(t => new JsonTest
					{
						id = t.TestId,
						name = t.Name,
						sections = t.Sections.ToDictionary(s => s.SectionId.ToString(), s => new JsonTestSection
						{
							id = s.SectionId,
							name = s.Name,
							questions = s.Questions.ToDictionary(q => q.QuestionId.ToString(), q => new JsonTestQuestion
							{
								id = q.QuestionId,
								text = q.Text,
								type = q.Type,
								answers = q.Options.ToDictionary(a => a.OptionId.ToString(), a => new JsonTestOption
								{
									id = a.OptionId,
									type = q.Type,
									text = a.Text
								})
							})
						})
					})
					.FirstOrDefault();
			return test;
		}

		public static JsonTestParticipationsInfo GetTestParticipationsDetailsById(int id, TestSystemAPIContext context)
		{
			var test = context.Tests
					.Where(t => t.TestId == id)
					.ToList()
					.Select(t => new JsonTestParticipationsInfo
					{
						testId = t.TestId,
						testName = t.Name,
						sectionsCount = t.Sections.Count,
						passedCount = t.TestParticipations.Count(p => p.Passed == true && p.Canceled != true),
						invitedCount = t.TestParticipations.Count(p => p.Canceled != true),
						averageResult = (int?)t.TestParticipations.Where(p => p.Result != null && p.Canceled != true && p.Passed == true).Average(p => p.Result),
						participations = t.TestParticipations
						.OrderByDescending(tpd => tpd.Result.HasValue)
						.ThenByDescending(tpd => tpd.Result)
						.ToDictionary(tp => tp.TestParticipationID.ToString(), tp => new JsonTestParticipation()
						{
							id = tp.TestParticipationID,
							fullName = tp.TestTaker.ContactInfo.FirstName + " " + tp.TestTaker.ContactInfo.LastName,
							group = tp.TestTaker.Audience.Name,
							email = tp.TestTaker.EMail,
							passed = tp.Passed == true,
							result = tp.Result,
							link = AppConstants.UI_URL + "/exam?token=" + tp.AuthToken
						}),
						availableGroups = t.Account.Audiences.ToDictionary(a => a.AudienceId.ToString(), a => new JsonTestAvailableGroup()
						{
							id = a.AudienceId,
							name = a.Name,
							testTakersCount = a.TestTakers.Count
						})
					})
					.FirstOrDefault();
			return test;
		}
	}
}
