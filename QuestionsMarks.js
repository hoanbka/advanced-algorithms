function questionsMarks(s) {
    let cnt = 0;
    let ready = false;
    let previous;
    let possiblePair = false;

    for (let i = 0; i < s.length; i++) {

        if (isDigit(s[i])) {
            if (!ready) ready = true;
            else {
                if (parseInt(s[i]) + previous === 10) {
                    possiblePair = true;
                    if (cnt !== 3) return false;
                }
                cnt = 0;
            }
            previous = parseInt(s[i]);

        } else if (ready && s[i] === '?') cnt++;
    }
    return !possiblePair ? false : true;
}

function isDigit(c) {
    return c >= '0' && c <= '9';
}