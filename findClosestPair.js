function findClosestPair(numbers, sum) {
    let map = new Map();
    let distance = numbers.length;
    numbers.map((e, i) => {
        if (map.has(sum - e)) {
            distance = Math.min(i - map.get(sum - e), distance);
        }
        map.set(e, i);
    })
    return distance === numbers.length ? -1 : distance;
}