        public struct Candidate
        {
            public int score;
            public int frequency;

            public Candidate(int score, int frequency)
            {
                this.score = score;
                this.frequency = frequency;
            }

        }


        int[] modeScores(int[] scores)
        {
            var dict = new Dictionary<int, int>();
            dict.Add(scores[0], 1);

            List<int> ans = new List<int>();
            ans.Add(scores[0]);

            Candidate best = new Candidate(scores[0], 1);

            for (int i = 1; i < scores.Length; i++)
            {

                foreach (KeyValuePair<int, int> kvp in dict)
                {
                    Console.WriteLine("Key = {0}, Value = {1}", kvp.Key, kvp.Value);
                }

                if (dict.ContainsKey(scores[i]))
                {
                    dict[scores[i]] += 1;
                }
                else
                {
                    dict[scores[i]] = 1;
                }

                // current best
                Candidate currBest = new Candidate(scores[i], dict[scores[i]]);

                if (currBest.frequency > best.frequency)
                {
                    ans.Add(currBest.score);

                    best = currBest;
                }
                else if (currBest.frequency == best.frequency)
                {
                    if (currBest.score > best.score)
                    {
                        ans.Add(currBest.score);

                        best = currBest;
                    }
                    else if (currBest.score < best.score)
                    {
                        ans.Add(best.score);
                    }
                }
                else
                {
                    ans.Add(best.score);
                }
            }

            return ans.ToArray();

        }