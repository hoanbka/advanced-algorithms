function maxSumSegments(arr) {
    let cnt = 0;
    let ans = [];
    let len = 1;

    while (true) {
        if (cnt == arr.length) break;
        let max = -1 * 10 ** 9
        let temp = []
        let pos = 0
        for (let i = 0; i < arr.length; i++) {
            if (temp.length == len) {
                if (sum(temp) > max) {
                    max = sum(temp)
                    pos = temp[0][1]

                }

                temp.shift()
                temp.push([arr[i], i])
                continue
            }

            temp.push([arr[i], i])
        }

        if (sum(temp) > max) {
            pos = temp[0][1]
        }

        ans.push(pos)

        cnt++
        len++
    }

    return ans
}

function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i][0];
    }
    return s;
}
// console.log(maxSumSegments([-1, 2, 1, 3, -2]))
