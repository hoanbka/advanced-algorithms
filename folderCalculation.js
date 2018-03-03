/**
 * Created by Albert on 7/27/2017.
 * The advantage of this program is using stack, not recursion.
 */
var async = require('async');
const fs = require('fs');

function getSizeFile(path) {
    var size;
    var stats = fs.statSync(path);
    size = stats.size;
    return size;
}

function getSizeFolder(path) {

    var size = 0;
    var stats = fs.statSync(path);
    try {
        if (stats.isFile()) {
            console.log(path + size);
            return getSizeFile(path);
        } else if (stats.isDirectory()) {
            var array = [];
            array = fs.readdirSync(path);
            while (array.length != 0) {
                var child = array.pop();
                var stats = fs.statSync(path + '/' + child);
                if (stats.isFile()) {
                    size += getSizeFile(path + '/' + child)
                } else {
                    var array2 = [];
                    array2 = fs.readdirSync(path + '/' + child);
                    array2.forEach(name => {
                        array.push(child + '/' + name);
                    })
                }
            }
        }
        return size;
    } catch (e) {

    }

}

function niceBytes(x) {
    var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        n = parseInt(x, 10) || 0,
        l = 0;
    while (n >= 1024) {
        n = n / 1024;
        l++;
    }
    return (n.toFixed(n >= 10 || l < 1 ? 0 : 1) + ' ' + units[l]);
}


var fileArray = ['bin', 'boot', 'cgroup', 'data', 'dev', 'etc', 'home', 'lib', 'lib64', 'lost+found', 'media', 'misc', 'mnt', 'net',
    'node_modules', 'opt', 'proc', 'root', 'sbin', 'selinux', 'srv', 'sys', 'tmp', 'usr', 'var', 'folderCalculation.js'
];

var sum = 0;
for (var i = 0; i < fileArray.length; i++) {
    sum += (getSizeFolder('/' + fileArray[i]));
}

console.log('sum=', sum);
var size = getSizeFolder("/");
console.log("size of the folder = " + niceBytes(size));