var List = require('./LinkedList.js');

var list = new List();

for(var i =0;i< 5;i++){
	list.add(i);
}

console.log(list.size())
