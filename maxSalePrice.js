function maxSalePrice(mass, marketValues) {
    let dp = [new Array(mass + 1).fill(0)]

    for (let i in marketValues) {
        i = +i
        if (marketValues[i]) {
            const pos = dp.length
            dp.push([0])
            for (let j = 0; j <= mass; j++) {
                if (i > j) {
                    dp[pos][j] = dp[pos - 1][j]
                } else {
                    dp[pos][j] = Math.max(marketValues[i] + dp[pos - 1][j - i], dp[pos - 1][j])
                }
            }
        }
    }
    return dp[dp.length - 1][mass]
}

//
let maxSalePrice = (mass, marketValues) => {
    let mem = [];
    marketValues = marketValues.map((price, kg) => {
        return { price: price, weight: kg };
    }).filter(obj => obj.price > 0);

    for (let index = 0; index <= marketValues.length; index++) {
        mem[index] = [];
        for (let weight = 0; weight <= mass; weight++) {
            if (index == 0 || weight == 0) {
                mem[index][weight] = 0;
            } else if (weight >= marketValues[index - 1].weight) {
                mem[index][weight] = Math.max(
                    marketValues[index - 1].price +
                    mem[index - 1][weight - marketValues[index - 1].weight],
                    mem[index - 1][weight]);
            } else {
                mem[index][weight] = mem[index - 1][weight];
            }
        }
    }

    return mem[marketValues.length][mass];
}