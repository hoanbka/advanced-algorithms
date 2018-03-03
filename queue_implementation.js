/*var Queue = function(){
	this.collection =[];

	this.enqueue = function(value){
		this.collection.push(value);
	}
	this.dequeue = function(){
		return this.collection.shift();
	}
	this.front = function(){
		return this.collection[0];
	}
	this.size = function (){
		return this.collection.length;
	}

	this.print = function(){
		console.log(this.collection);
	}
	this.isEmpty = function(){
		return this.collection.length===0;
	}
	this.pop = function(){
		if(this.collection.length===0){
			return undefined;
		}

		var arr = [];
		for(var i=1;i<this.collection.length;i++){
			arr.push(this.collection[i]);
		}
		this.collection =arr;
		return this.collection;

	}
}*/

// cach 2

var Queue = function(){
	collection =[];

	this.enqueue = function(value){
		collection.push(value);
	}
	this.dequeue = function(){
		return collection.shift();
	}
	this.front = function(){
		return collection[0];
	}
	this.size = function (){
		return collection.length;
	}

	this.print = function(){
		console.log(collection);
	}
	this.isEmpty = function(){
		return collection.length===0;
	}
	this.pop = function(){
		if(collection.length===0){
			return undefined;
		}

		var arr = [];
		for(var i=1;i<collection.length;i++){
			arr.push(collection[i]);
		}
		collection =arr;
		return collection;

	}
}


var queue = new Queue();

for(var i = 0;i< 5;i ++){
	queue.enqueue(i);
}

queue.print();
console.log('front is ', queue.front());
queue.dequeue();
console.log('queue isEmpty ', queue.isEmpty());
queue.print();
console.log('=========')
queue.pop();
queue.print();