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
            candleSizes = pushInOrder(candleSizes, newCandle);
        }
    }

    return total;
}

function pushInOrder(arr, item) {
    let ix = 0;
    while (ix < arr.length) {
        if (item < arr[ix]) { break; }
        ix++;
    }

    arr.splice(ix, 0, item);
    return arr
}