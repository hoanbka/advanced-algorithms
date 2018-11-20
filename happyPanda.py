def happyPanda(coins, candies):
    if len(coins) == 0:
        return 0
    MAX = 0
    remainingCoin = 0
    ans = 0

    for i in range(len(coins)):
        remainingCoin += coins[i]

        price = candies[i][0]
        happiness = candies[i][1]

        if remainingCoin >= price:
            ans += happiness
            remainingCoin -= price
            MAX = max(MAX, happiness)
        else:
            if happiness >= MAX:
                ans -= happiness
    return ans
