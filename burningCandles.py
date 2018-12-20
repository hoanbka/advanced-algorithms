import bisect
def burningCandles(candleSizes, n):
    candleSizes.sort()
    total = 0
    cnt = 0
    tmp = 0

    while len(candleSizes) > 0:
        cnt += 1
        # pop the maximum element in sorted list
        burnedCandle = candleSizes.pop()
        # add to total
        total += burnedCandle
        tmp += burnedCandle

        if cnt == n:
            # make new candle
            newCandle = math.floor(tmp / (n + 1))

            # reset cnt, tmp
            cnt = 0
            tmp = 0
            if newCandle == 0:
                continue
            # add a new candle and maintain a sorted candle list
            # using binary search
            bisect.insort(candleSizes, newCandle)

    return total


# solution 2
def burningCandles(candleSizes, n):
    candleSizes.sort()
    total = 0
    cnt = 0
    tmp = 0

    while len(candleSizes) > 0:
        cnt += 1
        # pop the maximum element in sorted list
        burnedCandle = candleSizes.pop()
        # add to total
        total += burnedCandle
        tmp += burnedCandle

        if cnt == n:
            # make new candle
            newCandle = math.floor(tmp / (n + 1))

            # reset cnt, tmp
            cnt = 0
            tmp = 0
            if newCandle == 0:
                continue
            # add a new candle and maintain a sorted candle list
            # using binary search
            binary_insert(candleSizes, newCandle)

    return total


def binary_insert(array, key):
    low = 0
    high = len(array)
    while low < high:
        mid = low + high >> 1
        if array[mid] < key:
            low = mid + 1
        else:
            high = mid
    array.insert(low, key)
