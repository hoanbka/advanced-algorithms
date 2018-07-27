var endorsements = [
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue HTML' },
    { skill: 'css', user: 'Sue CSS' },
    { skill: 'css', user: 'Bill CSS' }
];
var output = [
    { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    { skill: 'html', user: ['Sue'], count: 1 }
];

function transformJson2Json(endorsements) {
    let hash = {};

    endorsements.map(e => {
        if (hash[e.skill]) {
            hash[e.skill].push(e.user)
        } else {
            hash[e.skill] = [];
            hash[e.skill].push(e.user);
        }
    })

    let ans = [];
    let keys = Object.keys(hash);

    keys.map(key => {
        let obj = {};
        obj['skill'] = key;
        obj['user'] = hash[key];
        obj['count'] = hash[key].length;

        ans.push(obj);
    })

    return ans;
}

transformJson2Json(endorsements)