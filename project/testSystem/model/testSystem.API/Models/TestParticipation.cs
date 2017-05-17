using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text;

namespace testSystem.API.Models
{
	public class TestParticipation
	{
		public int TestParticipationID { get; set; }
		[Required]
		public int TestId { get; set; }
		public virtual Test Test { get; set; }
		[Required]
		public int TestTakerId { get; set; }
		public virtual TestTaker TestTaker { get; set; }
		[Required]
		public string AuthToken { get; set; }
		[Required]
		public DateTime DateInvited { get; set; }
		public bool? Canceled { get; set; }
		public DateTime? DateCanceled { get; set; }
		public bool? Passed { get; set; }
		public DateTime? DatePassed { get; set; }
		public int? Result { get; set; }

		public virtual List<TestParticipationAnswer> TestParticipationAnswers { get; set; }

		public TestParticipation() { }

		public TestParticipation(Test test, TestTaker testTaker)
		{
			Test = test;
			TestTaker = testTaker;

			const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
			StringBuilder res = new StringBuilder();
			using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
			{
				byte[] uintBuffer = new byte[sizeof(uint)];
				int length = 32;
				while (length-- > 0)
				{
					rng.GetBytes(uintBuffer);
					uint num = BitConverter.ToUInt32(uintBuffer, 0);
					res.Append(valid[(int)(num % (uint)valid.Length)]);
				}
			}
			AuthToken = res.ToString();
			DateInvited = DateTime.Now;
		}

		public void SetComplete(int result)
		{
			Passed = true;
			DatePassed = DateTime.Now;
			Result = result;
		}
	}
}