function firstDuplicateNumber(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        } else map.set(arr[i], 1);
    }
    return -1;
}