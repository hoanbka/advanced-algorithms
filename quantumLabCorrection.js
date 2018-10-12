function quantumLabCorrection(friends, firstInLine, k) {
    let queue = [];
    let map = {};

    for (let i = 0; i < friends.length; i++) {
        let temp = [];
        friends[i].forEach((e, i) => {
            if (e == 1) temp.push(i)
        })
        map[i] = temp;
    }

    queue.push(...map[firstInLine]);

    let hash = {};
    for (let i = 0; i < queue.length; i++) {
        if (hash[queue[i]]) hash[queue[i]] += 1
        else hash[queue[i]] = 1
    }

    let index = 0;

    while (true) {
        let student = queue[index];
        if (student == undefined) break;
        index++;
        hash[student] -= 1;

        if (--k == 0) return student;
        map[student].map(e => {
            if (!hash[e]) {
                queue.push(e);
                hash[e] = 1;
            }
        })
    }

    return -1;
}