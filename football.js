// http://codeforces.com/problemset/problem/96/A

function football(str) {
    var zeroes = 0;
    var ones = 0;

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '0') {
            zeroes++;
            ones = 0;
        } else {
            ones++;
            zeroes = 0;
        }
        if (zeroes == 7 || ones == 7) return "YES";
    }
    return "NO";
}

console.log(football('1000000001'));
console.log(football('001001'));
console.log(football('100001000000110101100000'));
console.log(football('10000000'));