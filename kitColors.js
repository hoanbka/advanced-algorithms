kitColors = (first, second) => {
    ans = []
    max = 0

    first.map(f => {
        second.map(s => {
            temp = math(f.substr(1), s.substr(1));
            if (temp > max) {
                max = temp;
                ans = [
                    [f, s]
                ]
            } else if (temp === max) {
                ans.push([f, s])
            }
        })
    })
    return ans
}

h = (x, y, i, j) => Math.abs(parseInt(x.substr(i, j), 16) - parseInt(y.substr(i, j), 16))

math = (s1, s2) => h(s1, s2, 0, 2) + h(s1, s2, 2, 2) + h(s1, s2, 4, 4)