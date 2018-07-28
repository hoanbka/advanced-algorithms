function oddSumSequence(arr) {
    let map = new Map();
    map.set(arr.join('-'), 0);

    let newArr = [];
    let count = 0;

    while (true) {
        count++;
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) sum += arr[i];
            newArr.push(sum);
        }

        if (map.has(newArr.join('-'))) {
            return map.get(newArr.join('-'));
        } else {
            map.set(newArr.join('-'), count);
            arr = newArr;
            newArr = [];
        }
    }
}

oddSumSequence = a => {
    hash = {}
    hash[a.join('-')] = 0

    r = []
    c = 0

    while (true) {
        c++
        s = 0

        a.map(e => {
            s += e % 2 != 0 ? e : 0
            r.push(s)
        })

        if (hash[r.join('-')] != undefined) return hash[r.join('-')]

        hash[r.join('-')] = c
        a = r
        r = []

    }
}