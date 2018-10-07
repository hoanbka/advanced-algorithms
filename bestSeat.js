function bestSeat(classLayout) {
    if (classLayout.length == 0) return [-1, -1]
    let ans = [];
    let max = undefined;
    const len = classLayout.length;

    var check = (i, j) => {
        return i >= 0 && i < len && j >= 0 && j < classLayout[i].length && classLayout[i][j] > 0
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < classLayout[i].length; j++) {
            let temp = 0;
            let bool = false;

            if (classLayout[i][j] == -1) {
                bool = true;

                if (check(i - 1, j - 1)) temp += classLayout[i - 1][j - 1];
                if (check(i, j - 1)) temp += classLayout[i][j - 1];
                if (check(i + 1, j - 1)) temp += classLayout[i + 1][j - 1];
                if (check(i + 1, j)) temp += classLayout[i + 1][j];
                if (check(i + 1, j + 1)) temp += classLayout[i + 1][j + 1];
                if (check(i, j + 1)) temp += classLayout[i][j + 1];
                if (check(i - 1, j + 1)) temp += classLayout[i - 1][j + 1];
                if (check(i - 1, j)) temp += classLayout[i - 1][j];

            }

            if (bool) {
                if (max == undefined) {
                    max = temp;
                    ans.push([i, j]);
                } else {
                    if (temp > max) {
                        ans = []
                        ans.push([i, j]);
                        max = temp;
                    } else if (temp == max) {
                        ans.push([i, j])
                    }
                }
            }
        }
    }

    if (!ans.length) return [-1, -1]
    return ans[0]
}
