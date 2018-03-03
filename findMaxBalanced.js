

function longestValidParentheses( s) {
        var maxans = 0;
        var stack = [];
        stack.push(-1);
        for (var i = 0; i < s.length; i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.length !=0) {
                    stack.push(i);
                } else {
                    maxans = Math.max(maxans, i);
                }
            }
        }
        return maxans;
}

console.log(longestValidParentheses("()()"));