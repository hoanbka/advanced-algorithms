function isPalindrom(str) {

    var first = 0;
    var last = str.length - 1;

    while (first <= last) {
        if (str.charAt(first) !== str.charAt(last)) {
            return false;
        }
        first++;
        last--;
    }
    return true;
}

console.log(isPalindrom("abc"));

var str = "1ab2abd3";
//output: 12+12+3

function numberFilter(str) {
    var arr = [];
    var temp = "";

    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));

        if (!isNaN(str.charAt(i))) {
            temp += str.charAt(i);

        } else {
            if (temp != "") {
                arr.push(temp);
            }
            temp = "";
        }
        if (i == str.length - 1 && temp != "") {
            arr.push(temp);
        }
    }
    return arr;
}

var arr = numberFilter(str);
console.log(arr);

var sum = arr.reduce(function(a,b) { return parseInt(a) + parseInt(b); }, 0);
console.log(sum);

///////////


