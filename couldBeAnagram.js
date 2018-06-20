function couldBeAnagram(s1, s2) {

    if (s1.length !== s2.length) return false;

    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '?') count++;
    }

    let same = 0,
        j = 0,
        map1 = new Map(),
        map2 = new Map();

    for (let i = 0; i < s1.length; i++) {
        if (map1.has(s1[i])) {
            map1.set(s1[i], map1.get(s1[i]) + 1);
        } else {
            map1.set(s1[i], 1);
        }

        if (map2.has(s2[i])) {
            map2.set(s2[i], map2.get(s2[i]) + 1);
        } else {
            map2.set(s2[i], 1);
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (s2.indexOf(s1[j]) !== -1) {

            if (map1.get(s1[j]) > map2.get(s1[j])) return false;
            same++;
        }
        j++;
    }

    return same + count === s1.length;

}