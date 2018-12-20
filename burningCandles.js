function burningCandles(candleSizes, n) {
    candleSizes.sort((a, b) => a - b);

    let total = 0;
    let cnt = 0;
    let tmp = 0;

    while (candleSizes.length > 0) {
        cnt++;
        let burnedCandle = candleSizes.pop();
        tmp += burnedCandle;
        total += burnedCandle;

        if (cnt == n) {
            // make a new candle
            let newCandle = Math.floor(tmp / (n + 1));
            cnt = 0;
            tmp = 0;

            // if new candle = 0, continue
            if (newCandle === 0) continue;

            // push new candle to candleSizes
            // and maintain candleSizes sorted
            let index = sortedIndex(candleSizes, newCandle);
            candleSizes.splice(index, 0, newCandle);
        }
    }

    return total;
}

// binary search to find index in array to add value
// to maintain a sorted list
// NOTE: array must be sorted
function sortedIndex(array, value) {
    var low = 0,
        high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
}
