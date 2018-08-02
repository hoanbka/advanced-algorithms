// https://app.codesignal.com/challenge/uf5m9HooxrJQoYZMn

fs = require('fs')
q = []
d = `/root/devops`
r = p => fs[`lstatSync`](p).isFile() ? q.push(p) :
    fs.readdirSync(p).map(f => r(p + '/' + f))
r(d)
// console.log(q)
let hash = {}

q.map(e => {
    let temp = fs.readFileSync(e, 'utf8');
    let subject = e.substr(e.lastIndexOf('/') + 1).replace('.txt', '')

    let t = temp.split('\n').filter(e => e != '')

    if (hash[subject]) {
        hash[subject].push(...t)
    } else {
        arr = []
        arr.push(...t)
        hash[subject] = arr
    }
})

hash = sortObject(hash)

function sortObject(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})
}


//solve
let output = []
let keys = Object.keys(hash)

for (let i = 0; i < keys.length; i++) {
    if (!keys[i]) break

    output.push('=')
    output.push(keys[i] + ':')
    let values = hash[keys[i]]
    values = sort(values)
    cnt = 1
    j = 0
    min = Math.min(4, values.length)
    while (cnt <= min) {
        if (!values[j][0]) {
            break
        }
        output.push(values[j++][0])
        cnt++
    }
}

console.log(output.join('\n').replace(/=/g, ''))

//
function sort(arr) {
    let temp = []
    arr.map(e => {
        name = e.substr(0, e.lastIndexOf(' '))
        score = parseInt(e.substr(e.lastIndexOf(' ') + 1))
        temp.push([name, score])
    })
    return temp.sort((a, b) => b[1] - a[1])
}