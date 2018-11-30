
// O(nlogn)
function OccurenceCount(arr) {
    if (arr.length == 0) return [];
    let max = 1;
    let ans = [];

    // sort
    arr.sort((a, b) => a - b);
    let tmp = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            tmp++;
        } else {
            if (tmp > max) {
                max = tmp;
                ans = [];

                ans.push(arr[i]);
            } else if (tmp == max) {
                ans.push(arr[i])
            }

            tmp = 1;
        }
    }

    return ans;
}

// O(n)
function OccurenceCountUsingMap(arr) {
    if (arr.length == 0) return [];
    let map = {},
        set = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            map[arr[i]] += 1;
        } else {
            map[arr[i]] = 1;
        }
    }

    let max = Math.max(...Object.values(map));

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == max) set.add(arr[i])
    }

    return [...set];
}

let arr = [1, 2, 4, 6, 7, 2, 4, 5]
console.log(OccurenceCount(arr));
console.log(OccurenceCountUsingMap(arr))