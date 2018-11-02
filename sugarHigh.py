def sugarHigh(candies, threshold):
    arr = []
    for i in range(len(candies)):
        arr.append([candies[i], i])

    arr = sorted(arr, key=lambda x: (x[0], x[1]))

    s = 0
    ans = []
    for i in range(len(arr)):
        if(s + arr[i][0] <= threshold):
            s += arr[i][0]
            ans.append(arr[i][1])
        else:
            break

    return sorted(ans)
