function zigzagWords(str, n) {
    str = str.split(' ').filter(e => e !== '').join('')
    if (n <= 1) return str

    let arr = []
    let row = 0
    let down = true

    for (let i = 0; i < str.length; i++) {
        i <= n - 1 ? arr.push(str.charAt(i)) : arr[row] += str.charAt(i);

        if (row == n - 1) {
            down = false;
        } else if (row == 0) {
            down = true;
        }
        down ? row++ : row--;
    }

    return arr.reverse().join('')
}