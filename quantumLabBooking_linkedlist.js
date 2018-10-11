function quantumLabBooking(friends, firstInLine, k) {

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        push(value) {
            const node = new Node(value);

            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }

            this.length++;
        }

        shift() {
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
    }

    const queue = new Queue();
    queue.push(firstInLine);

    while (queue.length) {
        const student = queue.shift();

        for (let next = 0; next < friends.length; next++) {
            if (friends[student][next]) {
                queue.push(next);
                if (--k == 0) return next;
            }
        }
    }
    return -1;
}