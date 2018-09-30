function schoolSupplies(supplies, prices) {

    let hash = {};

    for (let i = 0; i < supplies.length; i++) {
        let item = supplies[i];

        let arr = item.split(/([0-9]+)/).filter(e => e != '');

        temp = Number(arr[0]) == 1 ? arr[1] : arr[1].substring(0, arr[1].length - 1)
        if (hash[temp]) {
            hash[temp] += Number(arr[0]);
        } else hash[temp] = Number(arr[0]);
    }

    values = Object.values(hash);

    let ans = 0;
    for (let i = 0; i < values.length; i++) {
        ans += values[i] * prices[i];
    }
    return ans;
}