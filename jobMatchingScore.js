jobMatchingScore = (locations, criteria) => {
    let count = 0,
        helper = str => str.split(',').map(e => e = e.trim())
    lookUp = helper(criteria)

    for (let location of locations) {
        arr = helper(location)

        if (lookUp.length === 1) {
            if (arr[2] == lookUp[0]) count++
        } else if (lookUp.length === 2) {
            if (arr[1] == lookUp[0] &&
                arr[2] == lookUp[1]) count++
        } else {
            if (arr[0] == lookUp[0] && arr[1] == lookUp[1] && arr[2] == lookUp[2]) count++
        }
    }
    return count
}


// minimised version
jobMatchingScore = (a, l) => {
    h = e => e.split(',').map(e => e = e.trim())
    c = 0
    t = h(l)
    n = t.length

    a.map(x => {
        q = h(x)
        c += n == 1 ? q[2] == t[0] ? 1 : 0 : n == 2 ? q[1] == t[0] &&
            q[2] == t[1] ? 1 : 0 : q[0] == t[0] && q[1] == t[1] && q[2] == t[2] ? 1 : 0
    })
    return c
}
