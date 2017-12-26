class Stack {
	constructor(){
		this.items = [];
		this.size = this.items.length;
	}

	push(item){
		this.items.push(item);
		this.size ++;
	}

	pop(){

		if(!this.size){
			throw new Error('Stack is Empty');
		}else{
			this.items.pop();
		}
	}

	poll(){
		if(!this.size) throw new Error('Stack is Empty');
		else return this.items[this.size-1];
	}

	getItems(){
		return this.items;
	}
}

var stack = new Stack();
stack.push(4);
console.log(stack.poll());