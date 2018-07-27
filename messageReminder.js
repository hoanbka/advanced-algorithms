function messageReminder(sender, receiver, date) {
    let ans = [];
    let hash = {};

    date.forEach((d, i) => {
        hash[d] = sender[i] + '-' + receiver[i]
    })

    let pairs = Object.keys(hash);
    pairs.sort();

    for (let i = 0; i < date.length; i++) {
        let message = messageHandler(date[i]);
        let check = false;

        for (let j = i + 1; j < pairs.length; j++) {
            if (message >= pairs[j] && hash[date[i]] === receiver[j] + '-' + sender[j]) {
                check = true;
            }
        }

        if (!check) {
            message += hash[date[i]].split('-')[1] + ' please respond to ' + hash[date[i]].split('-')[0];
            ans.push(message)
        }
    }
    return ans.sort();
}

function messageHandler(s) {
    return new Date(new Date(s).getTime() + 48 * 60 * 60 * 1000).toISOString().replace(/T|000Z/g, ' ');
}