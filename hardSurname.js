function hardSurname(surname) {
    if (!surname) return 0;
    surname = surname.toLowerCase();
    let vowels = 'ueoai';
    let max = 0;
    let cnt = 0;

    surname.split('').map(e => {
        if (!vowels.includes(e)) cnt++;
        else {
            max = Math.max(cnt, max);
            cnt = 0;
        }
    })

    return Math.max(cnt, max);
}


// Optimised solution using Hash: O(n)
function hardSurname(surname) {
    if (!surname) return 0;
    surname = surname.toLowerCase();
    let vowels = ['u', 'e', 'o', 'a', 'i'];
    let hash = {};
    vowels.map(e => {
        hash[e] = 1;
    })
    let max = 0;
    let cnt = 0;

    surname.split('').map(e => {
        if (!hash[e]) cnt++;
        else {
            max = Math.max(cnt, max);
            cnt = 0;
        }
    })

    return Math.max(cnt, max);
}

function hardSurname(surname) {
    if (!surname) return 0;
    let max = 0,
        cnt = 0;

    surname.toLowerCase().split('').map(e => {
        if (e == 'u' || e == 'e' || e == 'o' || e == 'a' || e == 'i') {
            max = Math.max(cnt, max);
            cnt = 0;
        } else cnt++;
    })

    return Math.max(cnt, max);
}

//


m = c = 0
hardSurname = s => {
    [...s].map(e => {

        c = [...`ueoaiUEOAI`].includes(e) ? 0 : c + 1
        m = m > c ? m : c
    })

    return m
}