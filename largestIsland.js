function largestIsland(map) {
    let visited = map.map(e => e.map(f => false))
    let ans = 0;
    for (i = 0; i < map.length; i++) {
        
        for (j = 0; j < map[i].length; j++) {
            if (!visited[i][j] && map[i][j] == 1) {
                let queue = [
                    [i, j]
                ];
                
                let count = 0;
                visited[i][j] = true;
                while (queue.length > 0) {
                    [x, y] = queue.pop();
                    count++;

                    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [1, 1], [-1, 1]]
                    for(let index in directions) {
                        let [_x, _y] = directions[index]
                        if(x + _x >= 0 && x + _x <= map.length - 1 && y + _y >= 0 && y + _y <= map[i].length - 1 
                          && map[x + _x][y + _y] == map[x][y]
                          && !visited[x + _x][y + _y]){
                            queue.push([x + _x, y + _y])
                            visited[x + _x][y + _y] = true
                        }
                    }
                }
                
                ans = Math.max(ans, count)
            }
        }
        
    }
    return ans;
}