function secretAgentsMeetingProposal(incomingMessage, codeNumberDiff) {
    let map = {
        '0': 'a',
        '9': 'e',
        '8': 'i',
        '7': 'o',
        '6': 'u',
        '5': 'y',
        '4': 'w',
        '10': 't',
        '11': 'd',
        '12': 's',
        '13': 'n',
        '14': 'm',
        '15': 'r',
        '16': 'b',
        '17': 'k',
        '18': 'p',
        '*': 'morning',
        '@': 'afternoon',
        '#': 'night',
        '?': '-'
    }

    let arr = incomingMessage.split('.');
    let ans = '';
    let check = false;
    let tmp = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == '_') {
            tmp += codeNumberDiff;
            check = true;
            continue;
        }

        if (check) {

            if (!isNaN(arr[i])) ans += map[(Number(arr[i]) + tmp) + ''];
            else ans += map[arr[i]];

        } else ans += map[arr[i]]

    }

    let yes = '5.9.12',
        no = '13.7';

    if (ans.indexOf('today') !== -1) {
        if (ans.indexOf('park') == -1) return [ans, '13.7']
        else return [ans, yes]
    } else if (ans.indexOf('twodays') !== -1) {
        if (ans.indexOf('restaurant') !== -1 && ans.indexOf('morning') !== -1) return [ans, yes]
        else return [ans, no]
    } else {
        // tomorrow
        if (ans.indexOf('bar') !== -1 && ans.indexOf('night') !== -1 ||
            ans.indexOf('park') !== -1 && ans.indexOf('afternoon') !== -1) return [ans, yes]
        else return [ans, no]
    }
}