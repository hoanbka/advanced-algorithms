ticTacToeWhoWins = game => {
    let left = '',
        right = '',
        middle = '',
        j = 0,
        k = game.length - 1,
        diagonios1 = '',
        diagonios2 = '';

    for (let i = 0; i < game.length; i++) {
        left += game[i][0]
        right += game[i][2]
        middle += game[i][1]
        diagonios1 += game[i][j++]
        diagonios2 += game[i][k--]
    }

    let max = -1;
    let win;
    let arr = [game[0], left, game[2], right, game[1], middle, diagonios1, diagonios2];
    for (let i = 0; i < arr.length; i++) {

        if (isWin(arr[i])) {
            if (max == -1) {
                win = Number(arr[i][0]) % 2 == 0 ? 'X' : 'O'
                max = findMax(arr[i])
            } else {
                let tmp = findMax(arr[i])
                if (tmp < max) {
                    win = Number(arr[i][0]) % 2 == 0 ? 'X' : 'O'
                    max = tmp
                }
            }
        }
    }

    return max == -1 ? "draw" : win;
}

// check all elements in string s are all even or all odd
var isWin = (s) => s.split('').map(Number).every((val, i, arr) => (val + arr[0]) % 2 == 0)

var findMax = (s) => Math.max(...s.split('').map(Number))