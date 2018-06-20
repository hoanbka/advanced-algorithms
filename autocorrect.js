function autocorrect(trainingWords, typedWords) {

    trainingWords = new Set(trainingWords)

    function distance(s1, s2) {
        const l1 = s1.length,
            l2 = s2.length;
        let dp = Array.from({ length: l2 + 1 }, (v, i) => {
            let row = i ? new Array(l1 + 1) : Array.from({ length: l1 + 1 }, (q, j) => j)
            row[0] = i
            return row
        })
        for (let i = 1; i <= l2; i++) {
            for (let j = 1; j <= l1; j++) {
                const a = s2[i - 1],
                    b = s1[j - 1]
                dp[i][j] = a === b ? dp[i - 1][j - 1] :
                    Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1

            }
        }
        return dp[l2][l1]
    }
    return typedWords.reduce((t, v, i) => {
        let result = ''
        if (trainingWords.has(v)) result = v
        else {
            let min = Infinity
            trainingWords.forEach(o => {
                const d = distance(v, o)
                if (d < min) {
                    min = d
                    result = o
                }
            })
        }

        return t += (i ? ` ` : ``) + result
    }, '')
}

//https://codefights.com/challenge/tbnvdumnQNifQJ8CK/solutions/qkXqX4nDdcy7dZeZW
function levenshtein(a, b) {
    var t = [],
        u, i, j, m = a.length,
        n = b.length;
    if (!m) { return n; }
    if (!n) { return m; }
    for (j = 0; j <= n; j++) { t[j] = j; }
    for (i = 1; i <= m; i++) {
        for (u = [i], j = 1; j <= n; j++) {
            u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
        }
        t = u;
    }
    return u[n];
}

var table = {};

function lookup(a, b) {
    if (a > b) {
        var temp = a;
        a = b;
        b = temp;
    }
    if (table[a] == undefined) table[a] = {};
    if (table[a][b] == undefined) table[a][b] = levenshtein(a, b);
    return table[a][b];
}

function autocorrect(trainingWords, typedWords) {
    word: for (var i = 0; i < typedWords.length; i++) {
        var closest;
        var distance = 999;
        for (var j = 0; j < trainingWords.length; j++) {
            var d = lookup(typedWords[i], trainingWords[j]);
            if (d == 0) continue word;
            if (d < distance) {
                distance = d;
                closest = trainingWords[j];
            }
        }
        typedWords[i] = closest;
    }

    return typedWords.join(" ");
}