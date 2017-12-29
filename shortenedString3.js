function shortenedString(ss) {
    let stack = [],
        temp = '';
    for (let i = 0; i < ss.length; i += 1) {
        temp = '';
        if (ss[i].match(/\s+/)) {
            continue;
        } else if (ss[i + 1] && ss[i + 1].match(/\d+/)) {
            let pos = i;
            let repeatAmount = ss[i + 1];
            while (ss[i + 2] && ss[i + 2].match(/\d+/)) {
                repeatAmount += ss[i + 2];
                i++;
            }
            if (ss[pos] == ')') {
                let openBracket = stack.lastIndexOf('(');
                temp += stack.slice(openBracket + 1).join('');
                stack.splice(openBracket);
            } else {
                temp = ss[pos];
            }

            temp = temp.repeat(repeatAmount);
            stack.push(temp);
            i += 1;
        } else {
            stack.push(ss[i]);
        }
    }
    return stack.join('');
}

let ss = "(A(HI3)2)1";
console.log(shortenedString(ss));
console.log(shortenedString("KB2 (Y2F)2 B5A"))