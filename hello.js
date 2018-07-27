var async = require('async');
const fs = require('fs');
var ans = [];

function readFolder(path) {
    var size = 0;
    var stats = fs.statSync(path);

    var array = [];
    array = fs.readdirSync(path);
    console.log('array = ', array)

    while (array.length != 0) {
        var child = array.pop();
        var stats = fs.statSync(path + '/' + child);
        if (stats.isFile()) {
            // console.log('hihi ', path + '/' + child)
            var f = path + '/' + child;
            console.log('f origin = ', f)
            if (f.includes('fan.info') && f !== '/root/devops/russia/moscow/center/b2/fan.info') {
                fs.readFile(f, 'utf8', function(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('fan = ', data);
                    data = data.split('\n');
                    // console.log('data2 = ', data);
                    data.map(e => {
                        if (e !== '') ans.push(e)
                    });
                });
            }

            if (f.includes('ban')) {
                // console.log('ban = ', f)

                fs.readFile(f, 'utf8', function(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('ban = ', data);
                    data = data.split('\n');
                    // console.log('data2 = ', data);
                    data.map(e => {
                        if (e !== '') ans.push(e)
                    });
                });
            }

            if (f.includes('invite')) {
                // console.log('ban = ', f)

                fs.readFile(f, 'utf8', function(err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('invite = ', data);
                    data = data.split('\n');
                    // console.log('data2 = ', data);
                    data.map(e => {
                        if (e !== '') ans.push(e)
                    });
                });
            }


        } else {
            var array2 = [];
            array2 = fs.readdirSync(path + '/' + child);
            array2.forEach(name => {
                array.push(child + '/' + name);
            })
        }
    }

    return ans;

}

console.log('result  = ', readFolder('/root/devops'))