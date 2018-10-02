function extraCreditAssignment(decimal, denominator) {
    if (decimal.indexOf('(') == -1) {
        return Number(decimal) * denominator;
    }

    let maxLen = 100;
    let temp = '';
    let number = '';
    let bool = false;

    for (let i = 0; i < decimal.length; i++) {

        if (decimal[i] == '(') bool = true;

        if (!bool) {
            number += decimal[i];
        } else {
            if (decimal[i] !== ')' && decimal[i] !== '(') temp += decimal[i];
        }
    }

    while (number.length < maxLen) {
        number += temp;
    }

    return Math.round(Number(number) * denominator)
}