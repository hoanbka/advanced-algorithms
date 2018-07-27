w = require('fs')
q = []
d = `/root/devops`
r = p => w[`lstatSync`](p).isFile() ? q.push(p) :
    w.readdirSync(p).map(f => r(p + '/' + f))

r(d)
a = []
z = f => w.readFileSync(f, 'utf8').split('\n').filter(e => e != '').map(f => d + '/' + f.replace(/\./g, '/'))

x = z(`${d}/invite.info`)
y = z(`${d}/ban.info`)

q.map(f => {
    p = 0
    v = 0
    y.map(b => p = f == b + `/fan.info` ? 1 : 0)
    x.map(i => {
        if (f.includes(i)) v = 1
    })

    if (v && !p) a.push(...w.readFileSync(f, 'utf8').split('\n').filter(e => e != ''))

})

console.log(a.sort().join('\n'))