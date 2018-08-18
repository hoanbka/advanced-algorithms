function compareEnv(a, b) {
    let mapA = {};
    let mapB = {};

    a.map(e => {
        let temp = e.split('=');
        mapA[temp[0]] = temp[1]
    })

    b.map(e => {
        let temp = e.split('=');
        mapB[temp[0]] = temp[1]
    })

    let res = []
    let aKeys = Object.keys(mapA);
    let bKeys = Object.keys(mapB);

    aKeys.map(key => {
        if (!mapB[key]) {
            res.push(`${key} is only in A`);
        } else if (mapA[key] !== mapB[key]) res.push(`${key} is different`);
    })

    bKeys.map(key => {
        if (!mapA[key]) {
            res.push(`${key} is only in B`);
        }
    })

    return res.sort();
}