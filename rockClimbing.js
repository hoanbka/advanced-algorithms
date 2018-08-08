function rockClimbing(holds, friends) {
    let max = 0;
    for (let i = 0; i < holds.length - 1; i++) {
        max = Math.max(max, holds[i + 1] - holds[i])
    }

    friends.sort((a, b) => b - a)
    let ans = 0;

    while (friends.length > 0) {
        let temp = friends.slice();
        queue = [];

        while (temp.length) {
            if (temp.length) queue.push(temp.shift())
            if (temp.length) queue.push(temp.pop())
        }
        if (isValid(queue, max)) {
            ans = Math.max(ans, queue.length)

        }
        
        friends.pop();
    }

    return ans;
}

function isValid(arr, max) {
    if (arr[0] < max) return false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + arr[i + 1] < max) return false
    }
    return true;
}