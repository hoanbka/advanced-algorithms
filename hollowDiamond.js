function spaces(n) {
    return new Array(n + 1).join(" ");
}

function row(rowIndex, totalRows) {
    indentation = totalRows - rowIndex - 1;
    // letter = String.fromCharCode(65 + rowIndex);
    letter = "*";
    left = spaces(indentation) + letter + spaces(rowIndex);
    if (rowIndex == 0) {
        return left;
    } else {
        return left + spaces(rowIndex - 1) + letter;
    }
}

function hollowDiamond(n) {

    var out = "";
    for (rowIndex = 0; rowIndex < n; rowIndex++) {
        out += row(rowIndex, n)
        out +=  " ";
        console.log(row(rowIndex, n));
    }
    for (rowIndex = n - 2; rowIndex >= 0; rowIndex--) {
        out += row(rowIndex, n)
        out +=  " ";
        console.log(row(rowIndex, n));
    }
    return out;
}




console.log(hollowDiamond(5));


