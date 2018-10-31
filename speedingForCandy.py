def speedingForCandy(streets, n, k):
    tmp = []

    for i in range(len(streets)):
        tmp.append(maxSumWithK(streets[i], n))

    tmp.sort(reverse=True)
    ans = 0
    index = 0

    while k > 0:
        k -= 1
        if tmp[index] > 0:
            ans += tmp[index]
        else:
            break

        index += 1
        pass

    return ans


def maxSumWithK(arr, n):
    maxSum = [0 for i in range(len(arr))]
    maxSum[0] = arr[0]
    curr_max = arr[0]

    for i in range(1, len(arr)):
        curr_max = max(arr[i], curr_max + arr[i])
        maxSum[i] = curr_max

    # sum of first n elements
    s = 0
    for i in range(n):
        s += arr[i]

    # using sliding window
    res = s
    for i in range(n, len(arr)):
        s += arr[i] - arr[i - n]

        res = max(res, s)
        res = max(res, s + maxSum[i - n])

    return res
