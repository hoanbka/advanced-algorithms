function worldCupStages(results) {
    let firsts = [],
        seconds = [];
    for (let i = 0; i < results.length; i++) {
        firsts.push(results[i][0])
        seconds.push(results[i][1])
    }

    let f = '|',
        s = '|';

    for (let i = 0; i < firsts.length; i++) {

        if (i % 2 == 0) let [s1, s2] = stringHandler(firsts[i], seconds[i + 1]);
        else let [s1, s2] = stringHandler(firsts[i], seconds[i - 1]);

        f += s1;
        s += s2;
    }

    return [f, s]
}

function stringHandler(s1, s2) {
    let first = '',
        second = '';

    if (s1.length == s2.length) {
        first = s1 + '|';
        second = s2 + '|';


    } else if (s1.length < s2.length) {
        first = s1 + ' '.repeat(s2.length - s1.length) + '|';
        second = s2 + '|';

    } else {
        first = s1 + '|';
        second = s2 + ' '.repeat(s1.length - s2.length) + '|';
    }
    return [first, second]

}


/**
 * { item_description }
 */

worldCupStages = r => {

    f = '|'
    s = '|'

    for ( i = 0; i < r.length; i++) {
        [s1, s2] = h(r[i][0], r[i % 2 == 0 ? i + 1 : (i - 1)][1])

        f += s1
        s += s2
    }

    return [f, s]
}

h = (s1, s2) => {
    t1 = s1.length
    t2 = s2.length
    m = Math.max(t1, t2);
    return [s1 + ' '.repeat(m - t1) + '|', s2 + ' '.repeat(m - t2) + '|']
}