function findSecondMax(arr) {
    if (arr.length <= 1) return undefined;
    if (arr.length === 2) return arr[0] < arr[1] ? arr[0] : arr[1];

    let max = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }

    return second;
}

function findMaxOccurence(string) {
    let map = new Map();

    for (let i = 0, len = string.length; i < len; i++) {
        if (map.has(string[i])) {
            map.set(string[i], map.get(string[i]) + 1);
        } else map.set(string[i], 1);
    }

    let keys = Array.from(map.keys());
    let res = [];
    let max = 0;
    for (let i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) > max) {
            max = map.get(keys[i]);
            res = [keys[i]];
        } else if (map.get(keys[i]) === max) res.push(keys[i]);
    }
    return res;
}

function sumOfArray(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] + sumOfArray(arr.slice(1));
}


console.log(findSecondMax([8, 8, 8, 5, 6, 7, 12]));
console.log(findMaxOccurence('helloeel'));
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7]))
console.log([1, 2, 3, 4, 5, 6, 7].reduce((a, b) => a + b, 0))

function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('hello world'))