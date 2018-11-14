function robotVacuum(room, maxDirt) {
    const [n, m] = [room.length, room[0].length];
    const addresses = {0: [0, 0], 1: [0, 1], 2: [1, 1], 3: [1, 0]};
    const pods = [0, 0, 0, 0];
    
    let [dx, dy] = [1, 1];
    let [x, y] = [0, 0];
    let rotation = 4e8;
    
    // how much dirt is there in total?
    // knowing this will make it easier to check if there's any left
    let totalDirt = 0;
    
    for(let i = 0; i < n; i++) 
        for(let j = 0; j < m; j++) 
            totalDirt += room[i][j];
    
    while(totalDirt > 0) {
        // collect dirt
        for(const index in addresses) {
            const [r, c] = addresses[index];
            const dirt = room[r][c];
            const pickedUp = Math.min(dirt, maxDirt);
            
            room[r][c] -= pickedUp;
            totalDirt -= pickedUp;
            pods[index] += pickedUp;
        }
        
        // advance
        if(x + dx < 0 || x + dx >= m - 1) {
            // switch horizontal direction
            dx *= -1;
            
            if(y + dy < 0 || y + dy >= n - 1) 
                // switch vertical direction
                dy *= -1;
            
            y += dy;
        } else x += dx;
        
        // rotate
        rotation--;
        addresses[rotation % 4] = [y, x];
        addresses[(rotation + 1) % 4] = [y, x + 1];
        addresses[(rotation + 2) % 4] = [y + 1, x + 1];
        addresses[(rotation + 3) % 4] = [y + 1, x];
    }
    
    return pods;
}
