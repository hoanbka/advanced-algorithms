

var isPalindrome = (str) => {
    var res = str.split('').reverse().join('');
    return str === res;
}

console.log(isPalindrome("abac"))