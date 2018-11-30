//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function betterOrderTraversal(root) {
    var inOrder = function(root) {
        let result = [];
        let node = root;
        let traverse = function(node) {
            node.left && traverse(node.left);
            result.push(node.value);
            node.right && traverse(node.right);
        };
        traverse(root);
        return result;
    };

    var postOrder = function(root) {
        let result = [];
        let node = this.root;
        let traverse = function(node) {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            result.push(node.value);
        };
        traverse(root);
        return result;
    };

    var preOrder = function(root) {
        let result = [];
        let node = this.root;
        let traverse = function(node) {
            result.push(node.value);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        };
        traverse(root);
        return result;
    };

    console.log(inOrder(root))
    console.log(preOrder(root))
    console.log(postOrder(root))
    
    if(root == null) return []

    let ans = sort(inOrder(root), preOrder(root), postOrder(root));
    return ans
}

function sort(a1, a2, a3){
       for(let i = 0;i< a1.length;i++){
           if(a1[i] == a2[i] && a1[i] == a3[i]) continue;
           if(a1[i] < a2[i]){
               if(a2[i] <= a3[i]) return a1;
               if(a1[i] > a3[i]) return a3;
               if(a1[i] == a3[i]) a2[i+1] = 10**7;
               else return a1;
               
           }else if(a1[i] == a2[i]){
               if(a1[i] > a3[i]) return a3;
               else if(a1[i] == a3[i]) continue;
               else a3[i+1] = 10**7;
           }else{ // a1 > a2
               if(a2[i] > a3[i]) return a3;
               else if(a2[i] == a3[i]) continue;
               else return a2;
               
           }
       }
    return a1;
}

