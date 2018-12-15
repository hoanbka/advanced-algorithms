function followTheArrows(directionMap, start) {
    let map = directionMap.map(e => e.split(''));
    let set = new Set();
    set.add(start.join('-'));

    while (true) {

        let curr = map[start[0]][start[1]];
        if (curr == '>') {
            next = [start[0], start[1] + 1];
        } else if (curr == 'v') {
            next = [start[0] + 1, start[1]];
        } else if (curr == '<') {
            next = [start[0], start[1] - 1];
        } else if (curr == '^') {
            next = [start[0] - 1, start[1]];
        }

        if (map[next[0]] == undefined || map[next[0]][next[1]] == undefined || set.has(next.join('-'))) {
            break;
        } else {
            set.add(next.join('-'));
        }

        // update start
        start = next;
    }

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let tmp = [i, j];

            if (set.has(tmp.join('-'))) {
                map[tmp[0]][tmp[1]] = '.'
            }
        }
    }
    return map.map(e => e.join(''));
}

// TEST
let directionMap = ["<><<v<<<",
    "v<<<>>>^",
    ">v<v^^>>",
    "^>v<^<^<",
    "vv>>>^^v"
]
let start = [1, 2]

/* output
["<><<....", 
 "...<....", 
 "..<v.^>>", 
 "^..<..^<", 
 "vv....^v"]
 */


function followTheArrows(directionMap, start) {
    let map = directionMap.map(e => e.split(''));

    while (true) {

        let curr = map[start[0]][start[1]];
        map[start[0]][start[1]] = '.';

        if (curr == '>') {
            next = [start[0], start[1] + 1];
        } else if (curr == 'v') {
            next = [start[0] + 1, start[1]];
        } else if (curr == '<') {
            next = [start[0], start[1] - 1];
        } else if (curr == '^') {
            next = [start[0] - 1, start[1]];
        }

        if (map[next[0]] == undefined || map[next[0]][next[1]] == undefined || map[next[0]][next[1]] == '.') {
            break;
        }

        // update start
        start = next;
    }

    return map.map(e => e.join(''));
}
console.log(followTheArrows([">"], [1, 2]))
