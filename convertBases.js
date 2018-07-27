function mirrorBase(number, base1, base2) {
    let res = solve(number, base1, base2);
    return isPalindrome(res);
}

function isPalindrome(s) {
    let first = 0,
        last = s.length - 1;

    while (first < last) {
        if (s[first] !== s[last]) return false;

        first++;
        last--;
    }
    return true;
}

function solve(value, from_base, to_base) {
    let range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
    let from_range = range.slice(0, from_base);
    let to_range = range.slice(0, to_base);

    let dec_value = value.split('').reverse().reduce(function(carry, digit, index) {
        if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `' + digit + '` for base ' + from_base + '.');
        return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
    }, 0);

    let new_value = '';
    while (dec_value > 0) {
        new_value = to_range[dec_value % to_base] + new_value;
        dec_value = (dec_value - (dec_value % to_base)) / to_base;
    }
    return new_value || '0';
}