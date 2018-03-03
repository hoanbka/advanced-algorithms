function almostPalindrome(s) {

    var a, b;
    if (s.length % 2 === 0) {
        a = s.substr(0, ((s.length - 1) / 2) + 1);
        b = s.substr(((s.length - 1) / 2) + 1);
    } else {
        a = s.substr(0, ((s.length - 1) / 2) + 1);
        b = s.substr(((s.length - 1) / 2));
    }

    if (findOddOccurence(s) > 1) return false;
    if (compare(a.split('').reverse().join(''), b) <= 4 || compare(a, b.split('').reverse().join('')) <= 4) return true;
    return false;
}

function compare(s1, s2) {
    var misMatchedCount = 0;

    for (var i = 0, len = s1.length; i < len; i++) {
        if (s1[i] !== s2[i]) misMatchedCount++;
    }
    return misMatchedCount
}


function findOddOccurence(s) {
    var map = new Map();

    for (var i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    var keys = Array.from(map.keys());
    var cnt = 0;
    for (var i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) % 2 !== 0) cnt++;
    }
    return cnt;
}

almostPalindrome("abc") //