function decodeString(s) {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] != ']') {
            stack.push(s[i]);
        } else {
            let tmp = '';
            while (true) {
                if (stack[stack.length - 1] == '[') {
                    stack.pop();
                    break;
                }

                tmp += stack.pop();
            }
            tmp = tmp.split('').reverse().join('');
            let number = '';
            while (true) {
                if (!isNaN(stack[stack.length - 1])) {
                    number += stack.pop();
                } else {
                    break;
                }
            }

            number = Number(number.split('').reverse().join(''));
            stack.push(...tmp.repeat(number).split(''))

        }
    }

    return stack.join('')
}