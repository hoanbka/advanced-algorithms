function textUpdate(t) {
    let o = t.slice().split(' ');
    let temp = t.slice();
    let arr = temp.split(' ');
    let l = Math.ceil(arr.length / 2);

    arr = sort(arr);
    arr = arr.slice(0, l);

    let cnt = 0;
    for (let i = 0; i < o.length; i++) {
        if (cnt == l) {
            break;
        }

        j = arr.indexOf(o[i]);
        if (j !== -1) {
            o[i] = o[i].split('').reverse().join('');
            cnt++;
            arr[j] = '@';
        }
    }
    return o.join(' ')

}

let sort = arr => {
    let mapped = arr.map(function(el, i) {
        return { index: i, value: el.length };
    });

    mapped.sort(function(a, b) {
        return b.value - a.value || a.index - b.index;
    });

    let result = mapped.map(function(el) {
        return arr[el.index];
    });
    return result;

}

sort = arr => {
    v = (value, index) => { return { value, index } }
    getValue = ({ value }) => value

    return arr.map(v)
        .sort((a, b) => b.value.length - a.value.length || a.index - b.index)
        .map(getValue)

}

textUpdate = t => {
    a = t.split(' ')
    b = a.map((e, i) => {
        return { i: i, v: e.length }
    })

    b.sort((a, b) => {
        return b.v - a.v || a.i - b.i
    })

    b = b.map(c => Object.values(c))

    for (i = 0; i < Math.ceil(a.length / 2); i++) {
        a[b[i][0]] = a[b[i][0]].split('').reverse().join('')
    }
    return a.join(' ')
}

textUpdate = t => {
    a = t.split(' ')
    b = a.map((e, i) =>
        ({ i: i, v: e.length }))

    b.sort((a, b) => b.v - a.v || a.i - b.i)
    b = b.map(c => Object.values(c))
    
    i = 0
    while (i < Math.ceil(a.length / 2)) {
        a[b[i][0]] = a[b[i][0]].split('').reverse().join('')
        i++
    }

    return a.join(' ')
}