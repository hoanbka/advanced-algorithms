function speedingForCandy(streets, n, k) {
    let tmp = [];

    for (let i = 0; i < streets.length; i++) {
        tmp.push(maxSumWithK(streets[i], n))
    };

    tmp.sort((a, b) => b - a);

    let ans = 0,
        i = 0;
    while (k > 0) {
        k--;
        if (tmp[i] > 0) ans += tmp[i]
        else break;
        i++;
    }

    return ans;
}

function maxSumWithK(arr, n) {
    let maxSum = [];
    maxSum[0] = arr[0];
    let curr_max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        curr_max = Math.max(arr[i], curr_max + arr[i]);
        maxSum[i] = curr_max;
    }

    // sum of first n elements
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    // usinh sliding window
    let res = sum;
    for (let i = n; i < arr.length; i++) {
        sum += arr[i] - arr[i - n];

        res = Math.max(res, sum);

        res = Math.max(res, sum + maxSum[i - n]);

    }

    return res;
}