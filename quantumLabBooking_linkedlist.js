function quantumLabBooking(friends, firstInLine, k) {
    let queue = [];
    let map = {};

    for (let i = 0; i < friends.length; i++) {
        let temp = [];
        friends[i].forEach((e, i) => {
            if (e == 1) temp.push(i)
        })
        map[i] = temp;
    }

    queue.push(...map[firstInLine])

    let index = 0;
    let ans;

    while (true) {
        let temp = queue[index];
        if (temp == undefined) break;
        index++;

        if (index == k) {
            ans = temp;
            break;
        }
        queue.push(...map[temp])
    }

    return ans !== undefined ? ans : -1;
}
// the above solution has time complexity O(n^2) 
// we can solve the challenge with linked list.

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
