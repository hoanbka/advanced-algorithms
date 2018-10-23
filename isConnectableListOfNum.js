function isConnectableListOfNum(list) {
    list.sort();

    for (let i = 0; i < list.length - 1; i++) {
        if (compareStrings(list[i], list[i + 1])) return false;
    }
    return true;
}

function compareStrings(s1, s2) {
    let len = Math.min(s1.length, s2.length);
    let count = 0;

    for (let i = 0; i < len; i++) {
        if (s1[i] == s2[i]) count++;
        else break;
    }

    return count == len ? true : false;
}