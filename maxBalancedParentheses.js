/*Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.*/
var findMaxBalanced = function(str) {
    var arr = [];
    var max = 0;

    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var s = str.charAt(i);

        if (s == '(' || s == '{' || s == '[') {
            arr.push(s);
        } else {
            if (s == ')' && arr[arr.length - 1] == '(' || s == '}' && arr[arr.length - 1] == '{' || s == ']' && arr[arr.length - 1] == '[') {
                count++;
                arr.pop();
            } else {

                max = Math.max(count * 2, max);
                count = 0;
                while (arr.length != 0) {
                    arr.pop();
                }
            }
        }
    }
    max = Math.max(count * 2, max);
    return max;
}


console.log(findMaxBalanced(")()()("));//4
console.log(findMaxBalanced("()(()"));//2
console.log(findMaxBalanced("()(())"));//6
console.log(findMaxBalanced("()"));//2
console.log(findMaxBalanced("()()(()"));//4