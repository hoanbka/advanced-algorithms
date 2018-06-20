var isBeautifulString = str => {
    let map = new Map();
    str.split('').map(e => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        } else map.set(e, 1);
    })

    let chars = Array(26).fill().map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
    for (let i = 0; i < chars.length; i++) {
        if (!map.get(chars[i]) && map.get(chars[i + 1]) || map.get(chars[i]) < map.get(chars[i + 1])) return false;
    }

    return true;
}

console.log(isBeautifulString('bbc'))


