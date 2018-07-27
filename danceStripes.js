function danceStripes(s) {
    let ans1;
    let x = (-3 + Math.sqrt(9 + 8 * s)) / 2;
    if (x % 1 === 0) ans1 = x;

    let n = Math.round(x);
    let row;
    let max;
    let ans;

    while (n > 1) {
        row = 2;
        while (true) {
            temp = row * (n + 1) * n / 2 + n * ((row + 1) * row) / 2;

            if (temp == s) {
                ans = n * row;
                if (!max) max = ans;
                else max = Math.max(max, ans);
                break;
            }
            if (temp > s) {
                break;
            }
            row++;
        }
        n--;
    }

    return max && ans1 ? Math.max(max, ans1) : max && !ans1 ? max : !max && ans1 ? ans1 : -1;
}

function danceStripes(s) {
    let max = 0;
    for (let n = 1; n <= (Math.sqrt(8 * s + 9) - 3) / 2; n++) {
        for (let m = 1; m <= (Math.sqrt(8 * s + 9) - 3) / 2; m++) {
            if (((m * ((n + 1) * (n + 2) / 2 - 1)) + n * m * (m - 1) / 2) === s) {
                max = Math.max(max, m * n)
            }

            if (((m * ((n + 1) * (n + 2) / 2 - 1)) + n * m * (m - 1) / 2) > s) {
                break;
            }
        }
    }
    return max === 0 ? -1 : max;
}


danceStripes = s => {
    let max = 0,
        v = (Math.sqrt(8 * s + 9) - 3) / 2
    n = 1
    while (n <= v) {
        m = 1
        while (m <= v) {
            t = m * (n + 1) * n / 2 + n * ((m + 1) * m) / 2

            if (t == s) {
                max = Math.max(max, m * n)
            } else if (t > s) break
            m++
        }
        n++
    }
    return max == 0 ? -1 : max
}

danceStripes = s => {
    z = 0
    v = (Math.sqrt(8 * s + 9) - 3) / 2

    for (n = 1; n++ <= v;) {

        for (m = 1; m <= v; m++) {
            // t = m * (n + 1) * n / 2 + n * ((m + 1) * m) / 2
            t = n * m * (n + m + 2) / 2
            if (t == s) z = Math.max(z, m * n)
            if (t > s) break
        }
    }
    return !z ? -1 : z
}