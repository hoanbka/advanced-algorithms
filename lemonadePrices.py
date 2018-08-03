def lemonadePrices(prices, quantity):
    fullPrices = []
    descPercentage = (prices[0] - prices[1]) * 100.00 / prices[0]
    fullPrices.extend(prices)
    base = fullPrices[len(fullPrices) - 1]

    while len(fullPrices) < len(quantity):
        temp = 100 - descPercentage * len(fullPrices)
        newPrice = float('%.2f' % (base * temp / 100.00))
        fullPrices.append(newPrice)
        base = fullPrices[len(fullPrices) - 1]
        pass

    sum = 0
    for i in range(len(fullPrices)):
        sum += fullPrices[i] * quantity[i]

    print sum
    ans = float('%.2f' % sum)
    o = str(ans)
    if len(o[o.index('.'):]) < 3:
        o += '0'
    return o



			