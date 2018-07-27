/* Practice Questions */

// 4.1 Route between Nodes
// Hint: can use breath-first Search and or depth first search. 
// Breath-first search is useful to find the shortest path (faster).
//  Depth-first search is easier and can use recursion

// Combination of my answer and solution :
public class Node {
    private String name;
    private boolean isVisited;
    private Node[] children;
}

public boolean search(Node s, Node e) {
    // base case
    if (s == e) return true;

    //operate as queue
    LinkedList < Node > q = new LinkedList < Node > ();
    s.isVisited = true;
    q.add(s);

    // iterative approach
    Node curr;
    while (!q.isEmpty()) {
        curr = q.removeFirst();

        for (Node n: curr.children) {
            if (n == e) return true;

            if (!n.isVisited) {
                n.isVisited = true;
                q.add(n);
            }
        }
    }
    return false;
}

//4.2 Minimal Tree
public class BSTNode {
    //private field
    public int val;
    private BSTNode left;
    private BSTNode right;

    //constructor
    public BSTNode(int value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    // My Answer
    public BSTNode buildBST(int array[]) {

        if (array.length == 0) return null;
        if (array.length == 1) return new BSTNode(array[0]);

        // round down
        int mid = array.length / 2

        BSTNode curr = new BSTNode(array[mid]);
        // left subtree
        curr.left = buildBST(Arrays.copyOfRange(array, 0, mid));
        //right subtree
        curr.right = buildBST(Arrays.copyOfRange(array, mid, array.length));

        return curr;
    }

    // textbook solution
    public BSTNode createMinimalBST(int array[]) {
        return createMinimalBST(array, 0, array.length - 1);
    }

    public BSTNode createMinimalBSTt(int arr[], int start, int end) {
        if (end < start) {
            return null;
        }

        int mid = (start + end) / 2;

        BSTNode n = new BSTNode(arr[mid]);
        n.left = createMinimalBST(arr, start, mid - 1);
        n.right = createMinimalBST(arr, mid + 1, end);
        return n;
    }
}

// 4.3 List Of Depth 

public class BSTNode {
    //private field
    public int val;
    private BSTNode left;
    private BSTNode right;

    //constructor
    public BSTNode(int value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }

    // Answer-Method one
    public void listOfDepths(BSTNode n, ArrayList < LinkedList < BSTNode >> lists, int level) {
        if (n == null) return;

        LinkedList < BSTNode > list = null;

        //level not contained in the list. Assume list.size() would not be greater then level. But I think it is better to be <=
        if (lists.size() == level) {
            list = new LinkedList < BSTNode > ();
            lists.add(list);
        } else {
            list = lists.get(level);
        }

        list.add(n);

        listOfDepths(n.left, lists, level + 1);
        listOfDepths(n.right, lists, level + 1);
    }

    public ArrayList < LinkedList < BSTNode >> createLevelLinkedList(BSTNode root) {
        ArrayList < LinkedList < BSTNode >> lists = new ArrayList < LinkedList < BSTNode >> ();
        listOfDepths(root, lists, 0);

        return lists;
    }

    // Answer-Method two: breath-first search

    public ArrayList < LinkedList < BSTNode >> createLevelLinkedList2(BSTNode root) {
        ArrayList < LinkedList < BSTNode >> result = new ArrayList < LinkedList < BSTNode >> ();
        LinkedList < BSTNode > curr = new LinkedList < BSTNode > ();

        if (root != null) {
            curr.add(root);
        }

        while (curr.size() > 0) {
            result.add(curr); //add previous level
            LinkedList < BSTNode > parents = curr;
            curr = new LinkedList < > ();

            for (BSTNode parent: parents) {
                if (parent.left != null) {
                    curr.add(parent.left);
                }
                if (parent.right != null) {
                    curr.add(parent.right);
                }
            }
        }
        return result;
    }
}

// 4.4 Check balanced
public boolean checkBalance(BSTNode curr) {
    int min = Integer.MAX_VALUE;
    int max = 0;
    int level = 0;

    if (curr == null) return false;
    LinkedList < BSTNode > list = new LinkedList < BSTNode > ();
    list.add(curr);

    while (list.size() > 0) {
        max = level;

        LinkedList < BSTNode > parents = list;
        list = new LinkedList < BSTNode > ();

        for (BSTNode parent: parents) {
            if (parent.left != null) {
                list.add(parent.left);
            } else {
                min = Math.min(min, level);

            }

            if (parent.right != null) {
                list.add(parent.right);
            } else {
                min = Math.min(min, level);
            }
        }

        level++;
    }
    if (max - min > 1) {
        return false;
    }

    return true;
}