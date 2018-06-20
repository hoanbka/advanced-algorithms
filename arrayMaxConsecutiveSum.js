function arrayMaxConsecutiveSum(arr, k) {

    let index = 0;
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        index++;
        sum += arr[i];

        if (index === k) {
            max = max > sum ? max : sum;
            sum -= arr[i + 1 - k];
            index--;
        }
    }

    return max;
}