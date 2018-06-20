function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let ans = 0;

    if (weight1 > maxW && weight2 > maxW) return 0;
    if (value1 > value2) {
        if (weight1 < maxW) {
            ans += value1;
            if (weight1 + weight2 <= maxW) {
                ans += value2;
                return ans;
            } else return ans;
        } else if (weight1 === maxW) return value1;
        else return value2;
    } else if (value1 === value2) {
        if (weight1 + weight2 <= maxW) return value1 + value2;
        else {
            return value1;
        }
    } else {
        if (weight2 < maxW) {
            ans += value2;

            if (weight1 + weight2 <= maxW) {
                ans += value1;
                return ans;
            } else return ans;

        } else if (weight2 === maxW) return value2;
        else return value1;
    }
}


function knapsackLight(value1, weight1, value2, weight2, maxW) {

    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (Math.min(weight1, weight2) > maxW) {
        return 0;
    }
    if (weight1 <= maxW && (value1 >= value2 || weight2 > maxW)) {
        return value1;
    }
    return value2;
}