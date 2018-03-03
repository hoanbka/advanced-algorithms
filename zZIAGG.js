function zZIAGG(n) {
	if(n==1) return [[1]];

	var matrix = Array(n).fill(0).map(() => Array(n).fill(0));
	return solve(matrix)
}


function solve(matrix) {
    if (matrix == null || matrix.length == 0) return [0];
    var m = matrix.length,
        n = matrix[0].length;

    var row = 0,
        col = 0,
        d = 0;
    var dirs = [
        [-1, 1],
        [1, -1]
    ]

    var start = 1;
    for (var i = 0; i < m * n; i++) {

        matrix[row][col] = start ++;
        row += dirs[d][0];
        col += dirs[d][1];

        if (row >= m) { row = m - 1; col += 2; d = 1 - d;}
        if (col >= n) { col = n - 1; row += 2; d = 1 - d;}
        if (row < 0)  { row = 0; d = 1 - d;}
        if (col < 0)  { col = 0; d = 1 - d;}
    }

    return matrix;
}


console.log(zZIAGG(5));