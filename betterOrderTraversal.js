// Hello from Vietnam :D, Hoan Nguyen Van, Software Engineer

// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function betterOrderTraversal(root) {
    let inOrderRes = [],
        preOrderRes = [],
        postOrderRes = [];

    let help = function(root) {
        let node = root;
        let traverse = function(node) {
            // preOrder traverse
            preOrderRes.push(node.value);
            node.left && traverse(node.left);
            
            // inOrder traverse
            inOrderRes.push(node.value);
            node.right && traverse(node.right);
            
            // postOrder traverse
            postOrderRes.push(node.value);
        };
        
        // solve
        traverse(root);
        return [inOrderRes, preOrderRes, postOrderRes];
    }

    let ans = help(root)
    ans.sort((a,b)=> a[0] - b[0] || a[1] - b[1] || a[2] - b[2])
    
   return ans[0]
    
}
