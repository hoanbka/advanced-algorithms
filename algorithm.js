

function solve(n, max, arr) {
    var cnt = 0;
    var sum = 0;

    for (var i = 0; i < n; i++) {
        if (sum + arr[i] == max) {
            cnt++;
            sum = 0;
        } else if (sum + arr[i] > max) {
            cnt++;
            sum = arr[i];
        } else {
            sum += arr[i];
        }
    }

    if (sum > 0) cnt++;

    return cnt;
    
}

console.log(solve(10, 3, [1, 3, 1, 1, 3, 2, 2, 2, 3, 3]))