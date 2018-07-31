textUpdate = t => {
    a = t.split(' ')
    b = a.map((e, i) => [i, e.length]).sort((a, b) => b[1] - a[1] || a[0] - b[0])

    i = 0
    while (i < Math.ceil(a.length / 2)) {
        a[b[i][0]] = a[b[i++][0]].split('').reverse().join('')
    }

    return a.join(' ')
}

textUpdate = t => {
    a = t.split(' ')
    b = a.map((e, i) => ({ i: i, v: e.length }))

    b.sort((a, b) => b.v - a.v || a.i - b.i)
    i = 0
    while (i < Math.ceil(a.length / 2)) {
        a[b[i]['i']] = a[b[i]['i']].split('').reverse().join('')
        i++
    }

    return a.join(' ')
}


textUpdate = t => {
    o = t.slice().split(' ')
    a = t.split(' ')
    l = Math.ceil(a.length / 2)

    a = sort(a)
    a = a.slice(0, l)

    c = 0
    for (i = 0; i < o.length; i++) {
        if (c == l) break

        j = a.indexOf(o[i])
        if (j != -1) {
            o[i] = o[i].split('').reverse().join('')
            c++
            a[j] = '@'
        }
    }
    return o.join(' ')

}

sort = arr => {
    v = (value, index) => { return { value, index } }
    getValue = ({ value }) => value

    return arr.map(v)
        .sort((a, b) => b.value.length - a.value.length || a.index - b.index)
        .map(getValue)

}
