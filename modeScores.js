function modeScores(scores) {
    let map = {};
    map[scores[0]] = 1;

    let ans = [scores[0]];
    let best = {
        freq: 1,
        score: scores[0]
    }

    for (let i = 1; i < scores.length; i++) {

        if (map[scores[i]] !== undefined) {
            map[scores[i]] += 1;
        } else {
            map[scores[i]] = 1;
        }

        // current best
        let currBest = {
            freq: map[scores[i]],
            score: scores[i]
        }

        // compare
        if (currBest.freq > best.freq) {
            ans.push(currBest.score);

            best = currBest;
        } else if (currBest.freq == best.freq) {
            if (currBest.score > best.score) {
                ans.push(currBest.score);

                best = currBest;
            } else if (currBest.score < best.score) {
                ans.push(best.score);
            }
        } else {
            // currBest.freq < best.freq
            ans.push(best.score);

        }
    }

    return ans;
}