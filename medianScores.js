function medianScores(scores) {
    let ans = [scores[0]],
        tmp = [scores[0]],
        median;

    for (let i = 1; i < scores.length; i++) {
        inOrder(tmp, scores[i]);

        if (tmp.length % 2 !== 0) {
            median = tmp[Math.round(tmp.length / 2) - 1];
        } else {
            median = (tmp[tmp.length / 2] + tmp[tmp.length / 2 - 1]) / 2;
        }

        ans.push(Math.round(median));
    }

    return ans;
}

function inOrder(arr, item) {
    /* Insert item into arr keeping low to high order */

    let ix = 0;
    while (ix < arr.length) {
        if (item < arr[ix]) { break; }
        ix++;
    }

    arr.splice(ix, 0, item);
    return arr
}