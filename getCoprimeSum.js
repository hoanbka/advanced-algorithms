function getUocN(n) {
    let index = 2;
    let result = []
    while (n > 1) {
        if (n % index == 0) {
            result.push(index);
            n = n / index;
            continue;
        } else {
            index++
        }
    }
    return result
}


function getCoprimeSum(n) {
    if (n == 1) return 1
    let listUoc = getUocN(n);
    console.log(listUoc)
    var result = [];
    var sum = n * n / 2
    for (let i = 0; i < listUoc.length; i++) {
        if (!result.includes(listUoc[i])) result.push(listUoc[i])
    }
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        sum = sum * (1 - 1 / result[i])
    }
    return Math.floor(sum) % (10 ** 9 + 7)
    console.log(result)

}

/**
 * 
 * { item_description }
 */

getCoprimeSum = n => {
    a = n
    i = 2
    while (n > 1)
        n % i ?
        i++
        :
        a *= i - !!((n /= i) % i)

    return 0 | ++a / 2 % (1e9 + 7)
}