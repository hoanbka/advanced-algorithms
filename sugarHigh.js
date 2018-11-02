function sugarHigh(candies, threshold) {
    let arr = [];
    candies.map((candy, i) => {
        arr.push([candy, i]);
    })

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1])
    let sum = 0;
    let ans = [];
    let i = 0;

    for (let i in arr) {
        if (sum + arr[i][0] <= threshold) {
            sum += arr[i][0];
            ans.push(arr[i][1])
        } else break
    }

    return ans.sort((a, b) => a - b)
}

function sugarHigh(r, t) {
    e = [];
    r.map((r, t) => { e.push([r, t]) }), e.sort((r, t) => r[0] - t[0] || r[1] - t[1]);
    let s = 0,
        u = [];
    for (r in e) {
        if (!(s + e[r][0] <= t)) break;
        s += e[r][0], u.push(e[r][1])
    }
    return u.sort((r, t) => r - t)
}