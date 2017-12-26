

var findFirstNotRepeat = (str) => {
    var obj = {};

    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }

    for (var i in obj) {
        if (obj[i] == 1) {
            return i;
        }
    }
    return '_';

}

var str = "abacbgdeed"; // output: c


console.log(findFirstNotRepeat(str));
console.log(findFirstNotRepeat("abab"));