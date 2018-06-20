function zeroProfitPeriods(transactions) {
    let count = 0;
    let sum = 0;
    let map = {};
    map[0] = 1;
    for (let i = 0; i < transactions.length; i++) {
        sum += transactions[i];
        if (map[sum]) {
            count++;
            map = {};
            map[sum] = 1;
        } else map[sum] = 1;
    }
    return count;
}
