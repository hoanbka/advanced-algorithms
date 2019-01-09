function fileNaming(names) {
    let map = {};
    for (let i = 0; i < names.length; i++) {
        if (map[names[i]] === undefined) {
            map[names[i]] = 1;
        } else {
            let j = 1;
            while (true) {
                let tmp = names[i] + '(' + j + ')';
                if (map[tmp] == undefined) {
                    map[tmp] = 1;
                    break;
                }

                j++;
            }
        }
    }

    // console.log(Object.keys(map))
    return Object.keys(map);
}