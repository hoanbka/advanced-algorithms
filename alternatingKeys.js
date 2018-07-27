function alternatingKeys(text) {

    var rightHand = 'yuiophjklmn',
        curHand,
        typeTime = 0;
    while (text[0] == ' ') {
        typeTime++
        text = text.substr(1)
    }
    for (key of text) {
        if (key == ' ') {
            typeTime++
            curHand = !curHand
        } else {
            typeTime += curHand == rightHand.includes(key) ? 1.5 : 1
            curHand = rightHand.includes(key)

        }

    }
    return typeTime * 50
}


function alternatingKeys(text) {
    const leftSet = new Set(['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b']);
    let result = 0;
    let lastWasLeft = false;
    let firstNonSpace = true;

    for (let c of text) {
        result += firstNonSpace || c === ' ' || (leftSet.has(c) ^ lastWasLeft) ? 50 : 75;
        lastWasLeft = c === ' ' ? !lastWasLeft : leftSet.has(c);
        if (c !== ' ')
            firstNonSpace = false;
    }
    return result;
}