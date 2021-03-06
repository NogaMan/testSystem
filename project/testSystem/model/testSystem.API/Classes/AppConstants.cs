﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace testSystem.API.Classes
{
	public class AppConstants
	{
		public const string ERROR_UNAUTHORIZED = "unauthorized";
		public const string ERROR_WRONG_LOGIN = "loginNotFound";
#if DEBUG
		public const string UI_URL = "http://localhost:8084";
		public const string URL = "http://localhost:8082";
#else
		public const string UI_URL = "http://tetatest.ru";
		public const string URL = "http://api.tetatest.ru";
#endif
	}
}