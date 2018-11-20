function happyPanda(coins, candies) {
    if (coins.length == 0) return 0;

    let max = 0;
    let ans = 0;
    let remainingCoin = 0;

    for (let i = 0; i < coins.length; i++) {
        remainingCoin += coins[i];
        let price = candies[i][0];
        let happiness = candies[i][1];

        if (remainingCoin >= price) {
            ans += happiness;
            remainingCoin -= price;
            max = Math.max(max, happiness);
        } else {
            if (happiness >= max) {
                ans -= happiness;
            }
        }
    }

    return ans
}