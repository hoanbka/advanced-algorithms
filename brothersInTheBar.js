function brothersInTheBar(glasses) {
    let queue = [glasses[0]];
    let ans = 0;

    for (let i = 1; i < glasses.length; i++) {
        if (glasses[i] == queue[queue.length - 1] &&
            glasses[i] == queue[queue.length - 2]) {
            ans++;
            queue.pop();
            queue.pop();
        } else queue.push(glasses[i]);
    }
    return ans;
}

arr = [1, 2, 2, 3, 3, 4, 4, 4, 3, 2, 5, 6] // 3

brothersInTheBar = (g, q = [], c = 0) =>
    g.map(e => {
        l = q.length - 1

        if (e == q[l] & e == q[l - 1]) {
            c++
            q.pop()
            q.pop()
        } else q.push(e)
    }) | c

// C++ version
int brothersInTheBar(std::vector < int > g) {
    vector < int > v;
    v.push_back(g[0]);

    int cnt = 0;

    for (int i = 1; i < g.size(); i++) {
        if (v.size() >= 2) {
            if (g[i] == v.back() && g[i] == v[v.size() - 2]) {
                cnt++;
                v.pop_back();
                v.pop_back();
                continue;
            }
        }

        v.push_back(g[i]);
    }
    return cnt;
}

//
function brothersInTheBar(glasses) {
    let rounds = 0;
    let seekIndex = findNext(glasses, 0);
    while (seekIndex > -1) {
        ++rounds;
        glasses.splice(seekIndex, 3);
        seekIndex = findNext(glasses, Math.max(seekIndex - 2, 0));
    }
    return rounds;
}

function findNext(glasses, fromIndex) {
    while (fromIndex < glasses.length - 2) {
        if (isRound(glasses, fromIndex, fromIndex + 1, fromIndex + 2))
            return fromIndex;
        else fromIndex++;
    }
    return -1;
}

function isRound(glasses, i1, i2, i3) {
    return glasses[i1] == glasses[i2] && glasses[i2] == glasses[i3];
}

// cach3

function brothersInTheBar(glasses) {
    let result = 0;
    let count = 0;
    let keepLooping = true;
    while (keepLooping) {
        if (glasses.length < 3) {
            keepLooping = false;
            return count;
        }
        for (let i = 0; i < glasses.length - 2; i += 1) {
            if (glasses[i] === glasses[i + 1] && glasses[i] === glasses[i + 2]) {
                count += 1;
                glasses.splice(i, 3);
                break;
            }
        }
        if (count > result) {
            result = count;
        } else {
            keepLooping = false;
            break;
        }

    }
    return result;
}

// Using linked list
function brothersInTheBar(g) {
    a = 0;
    start = { value: null, next: null, prior: null };
    next = start;
    // transforms in a linkedlist for performance
    while (a < g.length) {
        next.value = g[a];
        next.next = { value: null, next: null, prior: next };
        next = next.next;
        a++;
    }

    if (start.next == null) return 0;
    counter = 0;
    next = start.next;

    while (next.next != null) {
        if (next.prior && next.prior.value == next.value && next.value == next.next.value) {
            counter++;
            if (next.prior.prior) {
                next.prior.prior.next = next.next.next;
                next.next.next.prior = next.prior.prior;
                next = next.prior.prior
            } else {
                next.next.next.prior = null;
                next = next.next.next;
            }
        } else
            next = next.next;
    }
    return counter;
}


// C# linkedlist
int brothersInTheBar(int[] input) {

    LinkedList < int > glasses = new LinkedList < int > (input);
    int cRounds = 0;
    LinkedListNode < int > glass = glasses.First;

    while (HasTwoSuccessors(glass)) {
        if (IsFirstOfRound(glass)) {
            cRounds++;
            LinkedListNode < int > glassNext = NewNextWhenRemoved(glass);
            glasses.Remove(glass.Next.Next);
            glasses.Remove(glass.Next);
            glasses.Remove(glass);
            glass = glassNext;
        } else
            glass = glass.Next;
    }

    return cRounds;
}

bool HasTwoSuccessors < T > (LinkedListNode < T > node) {
    return node ? .Next ? .Next != null;
}

bool IsFirstOfRound(LinkedListNode < int > node) {
    return HasTwoSuccessors(node) &&
        node.Value == node.Next.Value &&
        node.Value == node.Next.Next.Value;
}

LinkedListNode < T > NewNextWhenRemoved < T > (LinkedListNode < T > node) {
    if (node.Previous != null) {
        node = node.Previous;
        if (node.Previous != null)
            node = node.Previous;

        return node;
    } else if (node ? .Next ? .Next ? .Next != null) {
        return node ? .Next ? .Next ? .Next;
    } else
        return null;
}

let brothersInTheBar = g => {
    let x = r = 0

    while (x <= g.length - 3) {
        if (g[x] == g[x + 1] && g[x] == g[x + 2]) {
            r++
            g.splice(x, 3)
            x -= 2
        } else {
            x++
        }
    }

    return r
}


///////////// Customised stack()
class Stack {
    constructor() {
        this.arr = [];
        this.Count = 0;
        this.res_counter = 0;
    }
    peek() {
        return (this.Count == 0 ? null : this.arr[this.Count - 1]);
    }
    add(item) {
        let push_new = el => {
            this.arr.push({ value: el, cnt: 1 });
            this.Count += 1;
        }
        const head = this.peek();
        if (head) {
            if (head.value === item) {
                this.arr[this.Count - 1].cnt += 1;
                if (this.arr[this.Count - 1].cnt === 3) {
                    this.res_counter += 1;
                    this.remove();
                }
            } else {
                push_new(item);
            }
        } else {
            push_new(item);
        }
    }
    remove() {
        const head = this.peek();
        if (head.cnt > 3) {
            this.arr[this.Count - 1].cnt -= 3;
        } else {
            this.arr.pop();
            this.Count -= 1;
        }
    }
}

function brothersInTheBar(glasses) {
    let stack = new Stack();
    for (let glass of glasses) {
        stack.add(glass);
    }
    return stack.res_counter;
}
