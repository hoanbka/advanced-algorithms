const factorial = (pos) => {
    if (pos == 0) return 1;
    if (pos <= 1) return 1;
    return pos + factorial(pos - 1);
}
const getPosition = (row, col) => {   
    if (row == col && col == 0) {
        return factorial(row);
    }
    return factorial(row) + (col + 1);
}

const fillData = (row, col, data) => {
    if (typeof data[row] === "undefined") {
        data[row] = [];
    }

    if (col == 0) {
        data[row][col] = 1;
    } else {
        data[row][col] = (data[row-1][col] ? data[row-1][col] : 0) + data[row-1][col-1];
    }
    return data[row][col];
}
function nthPascalNumber(n) {
    let pascalRow = 2;
    let pascalCol = 0;
    let data = [[1], [1,1]];

    if (n >= getPosition(pascalRow, pascalCol)) {
        let lastValue = 1;
        while (n >= getPosition(pascalRow, pascalCol)) {
            lastValue = fillData(pascalRow, pascalCol, data);
            pascalCol++;
            if (pascalCol > pascalRow) {
                pascalCol = 0;
                pascalRow++;
            }
        }
        return lastValue;
    } else {
        return 1;
    }
}