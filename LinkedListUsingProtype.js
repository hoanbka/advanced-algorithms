function LinkedList() {
	this.head = null;
}

LinkedList.prototype.add = function(val) {

	var node = {
		value: val,
		next: null
	}
	var current;

	if (this.head === null) {
		this.head = node;
	} else {
		current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
	return node;
};

LinkedList.prototype.remove = function(node) {
	var current, value = node.value;

	if (this.head !== null) {
		if (this.head === node) {
			this.head = this.head.next;
			node.next = null;
			return value;
		}

		current = this.head;
		while (current.next) {
			if (current.next === node) {
				current.next = node.next;
				return value;
			}
			current = current.next;
		}
	}
}

var list = new LinkedList();
/*for(var i =0;i< 5;i++){
 list.add(i);
 }*/
list.add(6);
list.add(5);
list.add(12);
console.log(list);
