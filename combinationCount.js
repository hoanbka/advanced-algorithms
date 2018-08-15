function combinationCount(a1, a2, a3) {
    a1.sort((a, b) => a - b)
    a2.sort((a, b) => a - b)
    a3.sort((a, b) => a - b)

    let map12 = {}, map23 = {}

    for (let i in a1) {
        let temp = []
        for (let j = a2.length - 1; j >= 0; j--) {
            if (a2[j] > a1[i]) {
                if (map12[j]) map12[j] = map12[j] + 1;
                else map12[j] = 1
            } else break
        }
    }

    for (let i in a2) {

        let temp = []
        for (let j = a3.length - 1; j >= 0; j--) {
            if (a3[j] > a2[i]) {
                temp.push(j)
            } else break
        }

        if (temp.length) map23[i] = temp

    }

    let keys = Object.keys(map12), count = 0
    keys.map(e => {
        if (map23[e]) {
            count += map23[e].length * map12[e]
        }
    })

    return count
}