z = require('fs')
files = []
s = 'lstatSync'

r = p => z[s](p).isDirectory() ?
    z.readdirSync(p).map(f => r(p + '/' + f)) :
    files.push(p)

r('/root/devops')

var __dirname = "/root/devops/";
var res = [];
var fs = require('fs');
var invite = [];
var ban = [];

invite = fs.readFileSync('/root/devops/invite.info', 'utf8').split('\n').filter(e => e !== '').map(el => __dirname + el.replace(/\./g, '/'));
ban = fs.readFileSync('/root/devops/ban.info', 'utf8').split('\n').filter(e => e !== '').map(el => __dirname + el.replace(/\./g, '/'))

// console.log('invite: ', invite)
// console.log('ban: ', ban);

//solve
for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var isBan = false;
    var isInvite = false;

    for (var j = 0; j < ban.length; j++) {
        if (file === (ban[j] + '/fan.info')) {
            isBan = true;
            break;
        }
    }

    if (isBan) continue;
    for (var k = 0; k < invite.length; k++) {
        if (file.includes(invite[k])) {
            isInvite = true;
            break;
        }
    }

    if (isInvite) {
        var temp = fs.readFileSync(file, 'utf8').split('\n').filter(e => e !== '');
        res.push(...temp)
    }
}


console.log(res.sort().join('\n'))