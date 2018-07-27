const fs = require('fs');
const path = require('path');

// Read a directory using queue
function walkSync(path) {
    const fileList = [];
    let stats = fs.statSync(path);

    if (stats.isFile()) {
        fileList.push(path);

    } else {
        let array = [];
        array = fs.readdirSync(path);
        while (array.length != 0) {

            let child = array.pop();
            let file = path + '/' + child;
            let stats = fs.statSync(file);

            if (stats.isFile()) {
                fileList.push(file)

            } else {

                let array2 = [];
                array2 = fs.readdirSync(file);
                array2.forEach(name => {
                    array.push(child + '/' + name);
                })
            }
        }
    }
    return fileList;

}
let dirname = '/root/devops';
const files = walkSync(dirname);
// console.log('files = ', files)
invite = fs.readFileSync('/root/devops/invite.info', 'utf8').split('\n').filter(e => e !== '').map(el => dirname + '/' + el.replace(/\./g, '/'));
ban = fs.readFileSync('/root/devops/ban.info', 'utf8').split('\n').filter(e => e !== '').map(el => dirname + '/' + el.replace(/\./g, '/'))

// console.log('invite: ', invite)
// console.log('ban: ', ban);
let contents = [];
//solve
for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let isBan = false;
    let isInvite = false;

    for (let j = 0; j < ban.length; j++) {
        if (file === (ban[j] + '/fan.info')) {
            isBan = true;
            break;
        }
    }

    if (isBan) continue;
    for (let k = 0; k < invite.length; k++) {
        if (file.includes(invite[k])) {
            isInvite = true;
            break;
        }
    }

    if (isInvite) {
        let temp = fs.readFileSync(file, 'utf8').split('\n').filter(e => e !== '');
        contents.push(...temp)
    }
}


console.log(contents.sort().join('\n'))