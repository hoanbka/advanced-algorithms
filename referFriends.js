function referFriends(str) {
    let arr = JSON.parse(str.replace(/^\\" ]/, ''))

    let referFriendsList = [];
    let mapIdWithUserName = new Map();
    let referrerIdMap = new Map();
    arr.map(e => {
        let tmp = getValuesViaKeys(e);
        mapIdWithUserName.set(tmp[0], tmp[1]);

        let referrerId = getRefererId(e);
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

function getValuesViaKeys(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let _id, userName;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == '_id') _id = values[i];
        if (keys[i] == 'username') userName = values[i];
        
        if(_id && userName) break;
    }
    return [_id, userName];
}

function getRefererId(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let referrerId;

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == 'referrerId'){
            referrerId = values[i];
            break;
        } 
    }

    return referrerId? referrerId : undefined;
}