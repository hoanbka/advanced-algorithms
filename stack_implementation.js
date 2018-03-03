var Stack = function (){

	this.count =0;
	this.storage = {};

	this.push = function(value){
		this.storage[this.count]= value;
		this.count++;
	}

	this.peek = function(){
		return this.count !==0? this.storage[this.count-1]:undefined;
	}

	this.size = function(){
		return this.count;
	}

	this.pop = function(){
		if(this.count==0){
			return "no element";
		}
		this.count--;
		var res = this.storage[this.count];
		delete this.storage[this.count];
		return res;
	}
}

var stack = new Stack();
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size())