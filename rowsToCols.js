
/*
 * [13, 1, 1, 10] will be presented as a matrix below:
 * 
 * [
 * [1, 1, 0, 1], // 13
 * [0, 0, 0, 1], // 1
 * [0, 0, 0, 1], // 1
 * [1, 0, 1, 0]] // 10
 * 
 * rotate:
 * [
 * [1, 0, 0, 1], // 9
 * [1, 0, 0, 0], // 8
 * [0, 0, 0, 1], // 1
 * [1, 1, 1, 0]] // 14
 * 
 */

transpose = a => a[0].map((_, c) => a.map(r => r[c]));

function rowsToCols(rows) {
    let arr = [];
    let n = rows.length;

    rows.map(e => arr.push(bitOperation(e, n)));
    let temp = transpose(arr);
    let ans = [];

    temp.map(e => {
        ans.push(parseInt(e.join(''), 2))
    })

    return ans;
}

function bitOperation(a, n) {
    let b = [];

    for (let i = n - 1; i >= 0; i--)
        b[i] = (a >> i) & 1;

    return b.reverse();
}