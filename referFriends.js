function referFriends(str) {
    //replace all \"
    let arr = JSON.parse(str.replace(/^\\" ]/, ''))

    //map of _id with username
    let _idUserNameMap = new Map();

    // map of referrerId with its referrered times
    let referrerIdMap = new Map()

    // build two maps: _idUserNameMap and referrerIdMap
    arr.map(e => {
        _idUserNameMap.set(e['_id'], e['username'])

        let referrerId = e['referrerId']
        if (referrerId) {
            if (referrerIdMap.has(referrerId)) referrerIdMap.set(referrerId, referrerIdMap.get(referrerId) + 1)
            else referrerIdMap.set(referrerId, 1)
        }
    })

    let ans = [],
        _Ids = Array.from(_idUserNameMap.keys());

    // solve
    _Ids.map(e => {
        let userName = _idUserNameMap.get(e),
            money = referrerIdMap.get(e),
            temp = '';
        if (money) temp = userName + ' $' + money * 500
        else temp = userName + ' $0'

        ans.push(temp)
    })

    return ans.sort()
}