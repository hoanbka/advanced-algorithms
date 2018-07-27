adjacentSquare = a => {
    pairs = []

    // sort to find smapairspairsest
    a.sort((x, y) => x - y)

    // find possible pairs
    for (i in a) {
        pairs[i] = []
        for (j in a)
            if (i != j & (a[i] + a[j]) ** .5 % 1 == 0)
                pairs[i].push(j)
    }

    console.log('pairs = ', pairs)
    // solver
    solve = (index, s) => {
        if (s.length == a.length)
            return r = s.map(e => a[e])

        for (e of pairs[index])
            if (!s.includes(e)) {
                s.push(e)
                if (solve(e, s))
                    return 1
                else
                    s.pop() // backtracking
            }

        return 0
    }

    for (i in pairs)
        if (solve(i, [i]))
            return r

    return []
}