def modeScores(scores):
    obj = {}
    obj[scores[0]] = 1

    ans = [scores[0]]
    best = {
        'freq': 1,
        'score': scores[0]
    }

    for i in range(1, len(scores)):

        key = scores[i]
        if key in obj:
            obj[key] += 1
        else:
            obj[key] = 1

        currBest = {
            'freq': obj[scores[i]],
            'score': scores[i]
        }

        if currBest['freq'] > best['freq']:
            ans.append(currBest['score'])

            best = currBest
        elif currBest['freq'] == best['freq']:
            if currBest['score'] > best['score']:
                ans.append(currBest['score'])

                best = currBest
            elif currBest['score'] < best['score']:
                ans.append(best['score'])
        else:
            ans.append(best['score'])
    return ans
