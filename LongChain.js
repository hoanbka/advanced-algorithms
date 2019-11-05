function LongChain(n, mat) {
    return bfs(mat)
}

function bfs(map) {
    let ans = []
    for (i = 0; i < map.length; i++) {

        for (j = 0; j < map[i].length; j++) {
            let queue = [
                [i, j]
            ];

            let curr = []
            while (queue.length > 0) {
                [x, y] = queue.pop();
                let currValue = map[x][y]
                curr.push(currValue)

                let directions = [
                    [-1, 0], // LEFT
                    [1, 0], // RIGHT
                    [0, -1], // DOWN
                    [0, 1] // UP
                ]
                for (let index in directions) {

                    let [_x, _y] = directions[index]
                    if (x + _x >= 0 && x + _x <= map.length - 1 && y + _y >= 0 && y + _y <= map[i].length - 1 &&
                        (map[x + _x][y + _y] == currValue + 1)
                    ) {

                        queue.push([x + _x, y + _y])
                        break
                    }
                }
            }

            if (curr.length > 1) ans.push(curr)
        }

    }
    ans.sort((a, b) => b.length - a.length)
    if (ans.length == 0) return []
    return ans[0]
}