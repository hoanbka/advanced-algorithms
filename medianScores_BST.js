const medianScores = (s) => {
    class Node {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
            this.childCount = 0
        }
    }

    class binarySearchTree {
        constructor() {
            this.root = null;
            this.size = 0;
        }

        insert(value) {
            if (this.root) {
                let node = this.root;
                const parents = [];
                while (true) {
                    if (value < node.value) {
                        if (node.left) {
                            parents.push(node);
                            node = node.left;
                        } else {
                            node.left = new Node(value);
                            parents.push(node);
                            while (parents.length) {
                                const parent = parents.pop();
                                parent.childCount++;
                            }
                            break;
                        }
                    } else {
                        if (node.right) {
                            node = node.right;
                        } else {
                            node.right = new Node(value);
                            while (parents.length) {
                                const parent = parents.pop();
                                parent.childCount++
                            }
                            break;
                        }
                    }
                }

            } else this.root = new Node(value);

            this.size++;
        }

        access(k) {
            if (k >= this.size) throw ("Big");
            let node = this.root;
            while (true) {
                if (k === node.childCount) return node.value;
                if (k < node.childCount) {
                    node = node.left;
                } else {
                    k -= node.childCount + 1;
                    node = node.right;
                    if (!node) throw ("Far");
                }
            }
        }
    }

    const arrs = new binarySearchTree(),
        medians = [];

    const getMedian = (bst, length = bst.size) => {
        if (length % 2) return bst.access((length - 1) / 2);
        else return Math.ceil((bst.access(length / 2 - 1) + bst.access(length / 2)) / 2);
    }

    for (const num of s) {
        arrs.insert(num);

        medians.push(getMedian(arrs))
    }

    return medians

}