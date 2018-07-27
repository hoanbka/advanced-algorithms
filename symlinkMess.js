const fs = require('fs');
const path = require('path');

function walkSync(dir) {
    var files = fs.readdirSync(dir);
    const fileList = [];
    for (const file of files) {
        if (fs.lstatSync(dir + file).isDirectory()) {
            // walkSync(dir + file + '/').forEach(fileList.push.bind(fileList));
            walkSync(dir + file + '/').forEach(f => fileList.push(file + '/' + f))
        } else {
            fileList.push(file);
        }
    }
    return fileList;
}

const files = walkSync('/root/devops/');
const resolutions = [];

for (const file of files) { 
    const originalPath = '/root/devops/' + file;
    const resolvedPath = fs.realpathSync('/root/devops/' + file);
    if (originalPath !== resolvedPath) {
        resolutions.push(`${originalPath} ${resolvedPath}`);
    }
}

console.log(resolutions.sort().join('\n'));