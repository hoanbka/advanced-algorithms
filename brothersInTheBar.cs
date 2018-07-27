int brothersInTheBar(int[] glasses)
        {   
            if(glasses.Length < 3) return 0;
            List<int> list = new List<int>();
            
            list.Add(glasses[0]);
            list.Add(glasses[1]);
            int count = 0;

            for (int i = 2; i < glasses.Length; i++)
            {
                if (list.Count > 1 && glasses[i] == list[list.Count - 1] && glasses[i] ==list[list.Count - 2])
                {
                    count++;
                    list.RemoveAt(list.Count - 1);
                    list.RemoveAt(list.Count - 1);
                    continue;
                }

                list.Add(glasses[i]);
            }
            return count;
        }