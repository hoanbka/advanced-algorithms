function helpTom(row, col, startNumber) {
    let ans = Array(row).fill(0).map(x => Array(col).fill(0))

    ans[0][0] = startNumber;
    console.log(ans)
    console.log('ans = ', ans[row - 1][col - 1]);
    let tmpCol = 1;
    let tmpRow = 1;
    for (let i = 0; i < row; i++) {

        let rowMin = 1001,
            rowMax = -1;
        for (let j = 0; j < tmpCol; j++) {
            if (ans[i][j] < rowMin) rowMin = ans[i][j];
            if (ans[i][j] > rowMax) rowMax = ans[i][j];
        }

        let colMin = 1001,
            colMax = -1;
        for (let x = 0; x < tmpRow; x++) {
            if (ans[x][j] < rowMin) rowMin = ans[i][j];
            if (ans[x][j] > rowMax) rowMax = ans[i][j];
        }

        tmpCol++;
        tmpRow++;
    }

}

helpTom(3, 4, 5);