function largestPlateau(map) {
    if (!map.length) return 0
    const row = map.length,
        col = map[0].length,
        directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

    let max = 1,
        visited = Array.from({ length: row }, v => new Array(col).fill(false))

    function dfs(n, x, y) {
        let area = 1
        visited[x][y] = true
        directions.forEach(v => {
            const X = x + v[0],
                Y = y + v[1]
            if (-1 < X &&
                X < row &&
                -1 < Y &&
                Y < col &&
                map[X][Y] === n &&
                !visited[X][Y]) area += dfs(n, X, Y)
        })
        return area
    }

    map.forEach((q, x) => q.forEach((v, y) => {
        if (!visited[x][y]) {
            max = Math.max(max, dfs(v, x, y, 1))
        }
    }))

    return max
}



// cach 2

largestPlateau = m => {
    f = m.map(x => x.map(_ => 0));
    r = 0;
    for (i = 0; i < m.length; i++) {
        for (j = 0; j < m[0].length; j++) {
            if (!f[i][j]) {
                s = 0;
                q = [
                    [i, j]
                ];
                f[i][j] = true;
                while (q.length > 0) {
                    [x, y] = q.pop()
                    s++
                    if (x > 0 && m[x - 1][y] == m[x][y] && !f[x - 1][y]) {
                        q.push([x - 1, y])
                        f[x - 1][y] = 1
                    }
                    if (x + 1 < m.length && m[x + 1][y] == m[x][y] && !f[x + 1][y]) {
                        q.push([x + 1, y])
                        f[x + 1][y] = 1
                    }
                    if (y > 0 && m[x][y - 1] == m[x][y] && !f[x][y - 1]) {
                        q.push([x, y - 1])
                        f[x][y - 1] = 1
                    }
                    if (y + 1 < m[0].length && m[x][y + 1] == m[x][y] && !f[x][y + 1]) {
                        q.push([x, y + 1])
                        f[x][y + 1] = 1
                    }
                }
                r = s > r ? s : r
            }
        }
    }
    return r;
}

/**
 * 
 * Using DFS
 */

var largestPlateau = map => {
    // let visited = map.map(e => e.map(f => false))
    let visited = Array(map.length).fill().map(() => Array(map[0].length).fill(false));
    let r = 0;
    for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[0].length; j++) {
            if (!visited[i][j]) {
                let s = 0;
                let queue = [
                    [i, j]
                ];
                visited[i][j] = true;
                while (queue.length > 0) {
                    [x, y] = queue.pop()
                    s++
                    if (x > 0 && map[x - 1][y] == map[x][y] && !visited[x - 1][y]) {
                        queue.push([x - 1, y])
                        visited[x - 1][y] = true;
                    }
                    if (x + 1 < map.length && map[x + 1][y] == map[x][y] && !visited[x + 1][y]) {
                        queue.push([x + 1, y])
                        visited[x + 1][y] = true;
                    }
                    if (y > 0 && map[x][y - 1] == map[x][y] && !visited[x][y - 1]) {
                        queue.push([x, y - 1])
                        visited[x][y - 1] = true;
                    }
                    if (y + 1 < map[0].length && map[x][y + 1] == map[x][y] && !visited[x][y + 1]) {
                        queue.push([x, y + 1])
                        visited[x][y + 1] = true;
                    }
                }
                r = s > r ? s : r
            }
        }
    }
    return r;
}

// cach 4

function largestPlateau(map) {
    let mx = 0;
    for (let i = 0; i < map.length; i++)
        for (let j = 0; j < map[i].length; j++) {
            let h = map[i][j];
            if (h < 0) continue;
            let q = [],
                m = 0,
                e = (x, y) => {
                    if (map[x] && map[x][y] == h) {
                        q.push([x, y]);
                        map[x][y] = -1;
                        m++;
                    }
                };
            e(i, j);
            while (q.length > 0) {
                let [x, y] = q.shift();
                e(x - 1, y);
                e(x + 1, y);
                e(x, y - 1);
                e(x, y + 1);
            }
            if (m > mx) mx = m;
        }
    return mx;
}


/**
 * 
 * Using Recursion technique
 */

let largestPlateau = (map) => {
    let maxSeen = 0;

    map.map((thisRow, rowI) => {
        thisRow.map((thisHeight, colI) => {
            if (thisHeight !== null) {
                let size = seek(thisHeight, rowI, colI);

                if (size > maxSeen) { maxSeen = size; }
            }
        });
    });

    return maxSeen;

    function seek(height, rowI, colI) {
        let size = 0;

        if (map[rowI][colI] === height) {
            // found a match, null it out so we skip it in the main loop
            map[rowI][colI] = null;
            size += 1;

            if (rowI > 0) {
                // Check above
                size += seek(height, rowI - 1, colI);
            }
            if (rowI < map.length - 1) {
                // Check below
                size += seek(height, rowI + 1, colI);
            }
            // Check left
            size += seek(height, rowI, colI - 1);
            // Check right
            size += seek(height, rowI, colI + 1);
        }

        return size;
    }
}