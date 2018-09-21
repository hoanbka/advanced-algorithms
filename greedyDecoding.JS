function greedyDecoding(message) {
    let arr = '@abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    let ans = '';
    let temp = '';
    for (let i = 0; i < message.length; i++) {

        if (message[i] == '0') {
            if (!temp) continue;
        }
        if (Number(temp + message[i]) <= 26) {
            temp += message[i];
        } else {
            ans += arr[Number(temp)]
            temp = message[i];
        }
    }

    if (temp) {
      ans += arr[Number(temp)]
    }

    return ans;
}
let message = "195318520"

greedyDecoding(message);
console.log('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
// 20014 => 'TAD'