function letterPath(letterMap) {
    let pathList = new Set([""]);
    
    const buildPath = (path, lastLetter, y, x, visited) => {
        let key = y + '-' + x;
        if (!letterMap[y] || 
            !letterMap[y][x] ||
            visited.has(key)
           ) {
            return pathList.add(path);
        }
        let newLetter = letterMap[y][x];
        if (lastLetter === newLetter) {
            return pathList.add(path);
        }
        let updatedVisited = new Set([...visited, key]);
        [[0, -1], [0, 1], [-1, 0], [1, 0]].map(([ver, hoz]) =>
            buildPath(path + newLetter, newLetter, y + ver, x + hoz, updatedVisited)
        );
    };
    
    letterMap.map((row, y) =>
        row.map((cell, x) => {
            buildPath('', '', y, x, new Set());
        })
    );
    
    return [...pathList].sort((a, b) => b.length - a.length || b > a || -1)[0];
}