var exp = "[()]{}{[()()]()}";

function isBalanced(str) {

    var arr = [];

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == '[' || str.charAt(i) == '(' || str.charAt(i) == '{') {
            arr.push(str.charAt(i));
        } else {
            if (arr.length == 0) {
                return false;
            }

            if (str.charAt(i) == ')' && arr[arr.length - 1] == '(') {
                arr.pop();
            } else if (str.charAt(i) == '}' && arr[arr.length - 1] == '{') {
                arr.pop();
            } else if (str.charAt(i) == ']' && arr[arr.length - 1] == '[') {
                arr.pop();
            }else{
            	return false;
            }
        }
    }

    return arr.length == 0 ? true : false;
}

console.log(isBalanced("()()}{")); //false
console.log(isBalanced("()(){}")); //true
console.log(isBalanced("{()()}")); //true
console.log(isBalanced('[()]{}{[()()]()}')); //true
console.log(isBalanced('[()]{}{[()(]()}')); // return false
console.log(isBalanced("(])"));//false
console.log(isBalanced("[(])"));//false