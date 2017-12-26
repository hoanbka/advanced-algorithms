var arrayProcessor = (arr) => {
    var out = [];

    while (arr.length > 0) {
        var temp = arr.shift();

        if (Array.isArray(temp)) {
            for (var i = 0; i < temp.length; i++) {
                arr.push(temp[i]);
            }
        } else {
            out.push(temp);
        }
    }

    return out;
}

var arr = [1, 2, 2, 3, 4, [6, 7, 8], [9, [10, 11, 12]]];
//output: [1,2,2,3,4,5,6,7,8,9,10,11,12]

console.log(Array.isArray(arr));

console.log(arrayProcessor(arr))

const processArray = (array) => {
    return array.reduce((accu, curr) => {
        accu = (Array.isArray(curr)) ? accu.concat(processArray(curr)) : accu.concat(curr);
        return accu;
    }, []);
};


var arr2 = [1, 2, 2, 3, 4, [6, 7, 8], [9, [10, 11, 12]]];
console.log(processArray(arr2))
