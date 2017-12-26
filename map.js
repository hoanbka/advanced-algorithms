

function findMaxOccurence(arr) {
    var map = new Map();
    var max = 1;

    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }

        max = map.get(arr[i]) > max ? map.get(arr[i]) : max;
    }

    var output = [];
    var keys = Array.from(map.keys());

    for (var i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) == max) output.push(keys[i]);
    }
    return output;
}

console.log(findMaxOccurence([1, 2, 2, 3, 3, 5, 4]))

function findMaxOccurenceUsingArray(arr) {
    //suppose max element of the array is 100

    var check = Array(101).fill(0);
    var max = 0;

    for (var i = 0; i < arr.length; i++) {
        check[arr[i]]++;
        max = max < check[arr[i]] ? check[arr[i]] : max;
    }

    var output = [];
    for (var i = 0; i < check.length; i++) {
        if (check[i] == max) output.push(i);
    }
    return output;
}

var add = (a, b) => a + b;
function isBigEnough(element) {
    return element >= 15;
}
var res = [1, 2, 6, 7, 34, 35].find(isBigEnough);
console.log(res)


///
console.log(findMaxOccurenceUsingArray([1, 2, 2, 3, 3, 5, 4]))