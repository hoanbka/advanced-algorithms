function sequenceElement(a, n) {
    if (n <= a.length - 1) return a[n];

    let tmp = a.join('');
    let cnt = 0;
    // 4684 is the firt position the sequence is repeated
    // 4686 = a.join('').lastIndexOf(tmp)

    while (cnt < 4686) {
        cnt++;
        let i = a.length;
        let curr = (a[i - 5] + a[i - 4] + a[i - 3] + a[i - 2] + a[i - 1]) % 10
        a.push(curr);
    }

    let loop = a.join('').slice(0, 4686);
    return +loop[n % loop.length]
}

console.log(sequenceElement([1, 2, 3, 3, 4], 521687676))