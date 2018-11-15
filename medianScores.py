import bisect
def medianScores(scores):
    ans = [scores[0]]
    tmp = [scores[0]]
    median = None

    for i in range(1, len(scores)):
        bisect.insort(tmp, scores[i])

        if len(tmp) % 2 == 0:
            median = (tmp[math.ceil(len(tmp) / 2)] +
                      tmp[math.ceil(len(tmp) / 2) - 1]) / 2
        else:
            median = tmp[math.ceil(len(tmp) / 2) - 1]

        ans.append(math.ceil(median))
    return ans
