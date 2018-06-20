function isSafe(map, visited, x, y) {
    if (map[x][y] === 0 || visited[x][y]) return false;
    return true;
}

function isValid(row, col, x, y) {
    if (x < row && y < col && x >= 0 && y >= 0) return true;
    return false;
}
var findLongestPath = map => {
    let visited = map.map(e => e.map(f => 0))
    return solve(map, visited, 0, 0, map.length, map[0].length, 0, 0);
}

function solve(map, visited, i, j, x, y, max_dist, dist) {
    if (i === x && j === y) {
        max_dist = Math.max(dist, max_dist);
        return;
    }

    visited[i][j] = 1;

    if (isValid(i + 1, j) && isSafe(map, visited, i + 1, j))
         solve(map, visited, i + 1, j, x, y, max_dist, dist + 1);

    if (isValid(i, j + 1) && isSafe(map, visited, i, j + 1))
         solve(map, visited, i, j + 1, x, y, max_dist, dist + 1);

    if (isValid(i - 1, j) && isSafe(map, visited, i - 1, j))
         solve(map, visited, i - 1, j, x, y, max_dist, dist + 1);

    if (isValid(i, j - 1) && isSafe(map, visited, i, j - 1))
         solve(map, visited, i, j - 1, x, y, max_dist, dist + 1);

    //backtrack - remove (i,j) from visited matrix
    visited[i][j] = 0;
}

let map = [
    [0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 1]
]

console.log(findLongestPath(map));