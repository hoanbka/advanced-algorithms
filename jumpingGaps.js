function jumpingGaps(stage) {
    //Use Union-Find to know which position we we fall into when we are at stage[i][j]
    let set = {},
        findSet = n => set[n] ? set[n] = findSet(set[n]) : n,
        encode = (x, y) => x * 1e5 + y, //Generate a hash for position (x, y)
        decode = n => [n / 1e5 | 0, n % 1e5], //get coordinate of a position when we know it's hash
        row = stage.length + 1,
        col = stage[0].length,
        queue,
        visited = new Set(),
        safe = (x, y) => 0 <= x && x < row && 0 <= y && y < col
    //add empty path to handle when we walk on the floor
    stage.unshift(' '.repeat(col))
    stage.map((_, i) => {
        for(let j = 0;j < _.length;j++) {
            //Initialize data for the queue
            if(_[j] == 'S') {
                queue = [[i, j, 0]]
                visited.add(encode(i, j))
            }
            //if the current position (i, j) is empty and the lower position (i + 1, j) is also empty
            //we will fall from position (i, j) -> (i + 1, j)
            //Union these two positions, chose the lower position as a parent
            if(_[j] != '#' && i + 1 < row && stage[i + 1][j] != '#') 
                set[encode(i, j)] = encode(i + 1, j)
        }
    })
    for(let [x, y, steps] of queue) {
        if(stage[x][y] == 'E') return steps
        for(let dx = 0;dx <= 3;dx++) {
            //stop going higher when we hit wall
            if(x - dx < 0 || stage[x - dx][y] == '#') break;
            for(let sign of [-1, 1]) { //Go left / right
                for(let dy = 1;dy <= 3;dy++) {
                    let nextX = x - dx, nextY = y + sign * dy
                    if(safe(nextX, nextY) && stage[nextX][nextY] != '#') {
                        //Correct the new position (Gravity)
                        [nextX, nextY] = decode(findSet(encode(nextX, nextY)))
                        let ID = encode(nextX, nextY)
                        if(!visited.has(ID)) {
                            visited.add(ID)
                            queue.push([nextX, nextY, steps + 1])
                        }
                    } else break //stop going to the left(or right) when we hit wall
                }
            }
        }
    }
    return -1
}
