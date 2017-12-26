
/*  Google Interview */
var findFirstDuplicate = (arr) => {
    var map = new Map();

    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        } else {
            map.set(arr[i], 1);
        }
    }
}


var findFirstDuplicateUsingObject = (arr) => {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) return arr[i];
        obj[arr[i]] = 1;
    }
}
var arr = [1, 2, 3, 2, 5, 1];

console.log(findFirstDuplicate(arr));

console.log(findFirstDuplicateUsingObject(arr))