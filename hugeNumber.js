function hugeNumber(nums) {

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (compare(nums[i], nums[j])) {
                swap(nums, i, j);
            }
        }
    }

    if (Number(nums.join('')) == 0) return "0";
    return (nums.join('').replace(/^0+/, ''));
}


function compare(s1, s2) {

    var a = s1 + s2;
    var b = s2 + s1;

    for (var i = 0; i < a.length; i++) {
        if (a[i] < b[i]) return true;
        else if (a[i] > b[i]) return false;
    }
}


function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function removeLeadingZeroes(str) {

    return str.replace(/^0+/, '');
}


// solution 2
var hugeNumber2 = module.exports = (v) => {
    return (
        v.sort(
            function(x, y) {
                var a = x.toString(),
                    b = y.toString(),
                    ab = Number(a + b),
                    ba = Number(b + a);

                return ab > ba ? -1 : (ab < ba ? 1 : 0);
            }
        )
        .join('').replace(/^0+/, '0')
    );
}

var nums = ["661",
    "671",
    "957",
    "90",
    "333",
    "805",
    "382",
    "287",
    "611",
    "608",
    "25"
];

console.log(hugeNumber(nums) === "9579080567166161160838233328725")