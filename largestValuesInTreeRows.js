//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }


function largestValuesInTreeRows(t) {
    if(t == null) return [];
    var stack = [];
    stack.push(t);

    var res = [];
    res.push(t.value);

    var left = null, right = null;
    while(stack.length>0){
        var node  = stack[0];
        stack.shift();
        
        if(node.left){
            stack.push(node.left);
        }else {

        }

        if(node.right) {
            stack.push(node.right);
        }else right = null;
        
    }

    return res;
}

var t = {
    "value": -1,
    "left": {
        "value": 5,
        "left": null,
        "right": null
    },
    "right": {
        "value": 7, 
        "left": null,
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    }
}

// the output should be largestValuesInTreeRows(t) = [-1, 7, 1].
console.log(largestValuesInTreeRows(t))

// https://temando.slack.com <https://temando.slack.com>

// mark.simpson@temando.com;khanhnk1@fsoft.com.vn