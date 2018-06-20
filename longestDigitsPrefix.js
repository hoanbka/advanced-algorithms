function longestDigitsPrefix(str) {
    if (!isDigit(str[0])) return '';

    let ans = '';
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (isDigit(arr[i])) {
            ans += arr[i];
        } else break;
    }
    return ans;
}

function isDigit(c) {
    return c >= '0' && c <= '9';
}


/**
 * 
 * { item_description }
 */

function longestDigitsPrefix(inputString) {
    inputString += "a";
    return inputString.slice(0, inputString.search(/[^0-9]/))
}