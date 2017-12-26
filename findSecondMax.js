var findSecondMax = (arr) => {
    var max = Number.MIN_SAFE_INTEGER;
    var second = Number.MIN_SAFE_INTEGER;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max;
            max = arr[i];
        } else if (arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}

var arr = [-2, -3, -4];
console.log(findSecondMax(arr));


console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)