
// challenge: https://app.codesignal.com/challenge/n3Pp5y3rcJkacWbxd
// using queue
function reduceString(s) {
    let arr = s.split('');

    while (arr.length) {
        if (arr[0] == arr[arr.length - 1]) {
            arr.pop();
            arr.shift();
        } else {
            break;
        }
    }
    return arr.join('')
}

// using two pointers, better performance than the 1st solution
function reduceString(s) {
    let i = 0,
        j = s.length - 1;
    while (s.length) {
        if (i == j || s[i] !== s[j]) break;

        i++;
        j--;

    }
    return i == j ? '' : s.substring(i, j + 1);
}

console.log(reduceString("abacaba"));