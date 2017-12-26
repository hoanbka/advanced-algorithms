/**
 *  Implementation of Stacks using Linked List
 * 
 *  Dinesh
 * 
 */

// Namespace
var EX = {};

/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function(){
	this.item = null;
	this.next = null;
}

EX.LinkedStack = function(){
	var head = null;
	var size = null;
	
	/**
	 * Push function
	 * itereate through the list and then add the node to the last node in the list
	 */
	this.pushToStack = function(item){
		var node = new EX.StackNode();
		node.item = item;
		node.next = null;

		if(size < 1 && head === null){
			head = node;
			head.next = null;
			size = 1;
		}else{
			var current = head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			size += 1;
		}
	}
	
	/**
	 * Pop Function
	 * Iterate through the list and grab the last item and remove it from list
	 */
	this.popFromStack = function(){
		var current = head;
		if(size === 0){
			return;
		}

		if(size === 1){
			head = null;
			size = 0;
			return current;
		}
		
		var prev = current;  // 543
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		size -= 1;
		return current;
	}
	
	// Function to check if stack is empty
	this.isStackEmpty = function(){
		return (size < 1) ? true : false;
	}
	
	// Function to get top item of the stack
	this.stackTop = function(){
		var current = head;
		if(size > 0 && head !== null){
			while(current.next !== null){
				current = current.next;
			}
			return current.item;
		}else{
			console.log("There is no item in the stack");
			return null;
		}
	}
	
	this.printStack = function(){
		var current = head;
		while(current.next !== null){
			console.log("Item "+current.item + " is on the stack.");
			current = current.next;
		}
		console.log("Item "+current.item + " is on the stack.");
	}
	
}



var stack = new EX.LinkedStack();
console.log(stack.isStackEmpty());

stack.pushToStack("Test0");

var top = stack.stackTop();
console.log(top.item);
stack.pushToStack("Test1");
console.log(stack.stackTop().item);
stack.pushToStack("Test2");
stack.pushToStack("Test3");
stack.printStack();
var poped = stack.popFromStack();
console.log("Popped item is: " + poped.item);
stack.printStack();
