string[] secretAgentsMeetingProposal(string incomingMessage, int codeNumberDiff)
        {
            Dictionary<string, string> dict = new Dictionary<string, string>();
            dict.Add("0", "a");
            dict.Add("9", "e");
            dict.Add("8", "i");
            dict.Add("7", "o");
            dict.Add("6", "u");
            dict.Add("5", "y");
            dict.Add("4", "w");
            dict.Add("10", "t");
            dict.Add("11", "d");
            dict.Add("12", "s");
            dict.Add("13", "n");
            dict.Add("14", "m");
            dict.Add("15", "r");
            dict.Add("16", "b");
            dict.Add("17", "k");
            dict.Add("18", "p");
            dict.Add("*", "morning");
            dict.Add("@", "afternoon");
            dict.Add("#", "night");
            dict.Add("?", "-");

            string[] tokens = incomingMessage.Split('.');
            string ans = "";
            bool check = false;
            int tmp = 0;

            string yes = "5.9.12";
            string no = "13.7";
            string[] output = new string[2];
     
            for (int i = 0; i < tokens.Length; i++)
            {

                if (tokens[i].Equals("_"))
                {
                    tmp += codeNumberDiff;
                    check = true;
                    continue;
                }

                if (check)
                {
                    double num;
                    if (double.TryParse(tokens[i], out num))
                    {
                        int v = Int32.Parse(tokens[i]) + tmp;
                        string key = v.ToString();
                        ans += dict[key];
                    }
                    else
                    {
                        ans += dict[tokens[i]];
                    }
                }
                else
                {
                    ans += dict[tokens[i]];
                }

            }

            output[0] = ans;

            if (ans.Contains("today"))
            {
                if (!ans.Contains("park"))
                {
                    output[1] = no;
                }
                else
                {
                    output[1] = yes;
                }
            }
            else if (ans.Contains("twodays"))
            {
                if (ans.Contains("restaurant") && ans.Contains("morning"))
                {
                    output[1] = yes;
                }
                else output[1] = no;
            }
            else
            {
                if (ans.Contains("bar") && ans.Contains("night") ||
                    ans.Contains("park") && ans.Contains("afternoon"))
                {
                    output[1] = yes;
                }
                else output[1] = no;
            }

            return output;
        }