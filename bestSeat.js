function bestSeat(classLayout) {
    if (classLayout.length == 0) return [-1, -1]
    let ans = [];
    let max = undefined;
    const len = classLayout.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < classLayout[i].length; j++) {
            let temp = 0;
            let bool = false;

            if (classLayout[i][j] == -1) {
                bool = true;
                if (i - 1 >= 0 && j - 1 >= 0 && classLayout[i - 1][j - 1] > 0) temp += classLayout[i - 1][j - 1];
                if (j - 1 >= 0 && classLayout[i][j - 1] > 0) temp += classLayout[i][j - 1];
                if (i + 1 < len && j - 1 >= 0 && classLayout[i + 1][j - 1] > 0) temp += classLayout[i + 1][j - 1];
                if (i + 1 < len && classLayout[i + 1][j] > 0) temp += classLayout[i + 1][j];
                if (i + 1 < len && j + 1 < classLayout[i].length && classLayout[i + 1][j + 1] > 0) temp += classLayout[i + 1][j + 1];
                if (j + 1 < classLayout[i].length && classLayout[i][j + 1] > 0) temp += classLayout[i][j + 1];
                if (i - 1 >= 0 && j + 1 < classLayout[i].length && classLayout[i - 1][j + 1] > 0) temp += classLayout[i - 1][j + 1];
                if (i - 1 >= 0 && classLayout[i - 1][j] > 0) temp += classLayout[i - 1][j];

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
