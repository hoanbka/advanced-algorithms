function referFriends(str) {
    let arr = JSON.parse(str.replace(/^\\" ]/, ''))

    let mapIdWithUserName = new Map();
    let referrerIdMap = new Map();
    arr.map(e => {
        mapIdWithUserName.set(e['_id'], e['username']);

        let referrerId = e['referrerId']
        if (referrerId) {
            if (referrerIdMap.has(referrerId)) referrerIdMap.set(referrerId, referrerIdMap.get(referrerId) + 1);
            else referrerIdMap.set(referrerId, 1);
        }
    })

    let ans = [];
    let userNames = Array.from(mapIdWithUserName.keys());

    userNames.map(e => {
        let userName = mapIdWithUserName.get(e);
        let money = referrerIdMap.get(e);
        let temp = '';
        if (money) temp = userName + ' $' + money * 500;
        else temp = userName + ' $0';

        ans.push(temp)
    })

    return ans.sort();
}
