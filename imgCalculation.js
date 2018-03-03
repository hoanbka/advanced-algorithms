/* CREATED BY HOAN NGUYEN (ALBERT)
 *  THIS PROGRAM USES STACK TO CALCULATE SIZE OF IMAGES.
 *
 */
var async = require('async');
var fs = require('fs');

function getSizeFile(path) {
	return fs.statSync(path).size;
}

function isImage(file) {
	return file.substr(file.length - 4) === '.jpg';
}

function getSizeFolder(path) {

	var size = 0;
	var stats = fs.statSync(path);

	if (stats.isFile()) {
		if (isImage(path)) {
			return getSizeFile(path);
		}
		return 0;
	}

	var array = [];
	array = fs.readdirSync(path);

	while (array.length != 0) {
		var child = array.pop();
		var stats = fs.statSync(path + '/' + child);

		if (stats.isFile()) {

			if (isImage(path + '/' + child)) {
				console.log(path + '/' + child);
				size += getSizeFile(path + '/' + child)
			}

		} else {
			var array2 = [];
			array2 = fs.readdirSync(path + '/' + child);

			array2.forEach(name => {
				array.push(child + '/' + name);
			})
		}
	}

	return size;
}


var folder = 'C:/Users/Albert Hoan/Downloads/NHAC/10 Examples of substring in Java.jpg';
var size = getSizeFolder(folder);

console.log("size of the images = " + size);