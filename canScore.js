function distanceTwoPoints(x1, y1, x2, y2) {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5;
}


function checkCollision(x1, y1, x2, y2, defendingPlayers, d) {

    for (let i = 0; i < defendingPlayers.length; i++) {
        x0 = defendingPlayers[i][0];
        y0 = defendingPlayers[i][1];

        let a = (y2 - y1) / (x2 - x1);
        let b = -((y2 - y1) * x1 / (x2 - x1) + y1 - y0);


        let delta = (a * b - x0) ** 2 - (1 + a ** 2) * (x0 ** 2 + b ** 2 - d ** 2);

        if (delta < 0) continue;
        let n0 = (x0 - a * b + delta ** .5) / (1 + a ** 2);
        let n1 = (x0 - a * b - delta ** .5) / (1 + a ** 2);

        let y = x => (y2 - y1) * (x - x1) / (x2 - x1) + y1;
        let check = x => (x - x1) * (x - x2) + (y - y1) * (y - y2);

        if (check(n0) > 0 || check(n1) > 0) return false;
    }

    return true;
}


function canScore(attackingPlayers, defendingPlayers, d) {
    pairs = []

    // find possible pairs
    for (const [x1, y1] of attackingPlayers) {
        const row = [];

        for (const [x2, y2] of attackingPlayers) {
            let canPass = 1;

            for (const [x0, y0] of defendingPlayers) {
                // vector equation parameter
                const s = ((y1 - y0) * (y1 - y2) + (x1 - x0) * (x1 - x2)) / ((x2 - x1) ** 2 + (y2 - y1) ** 2);
                // distance from defender to pass line
                const dist = (((x2 - x1) * s + (x1 - x0)) ** 2 + ((y2 - y1) * s + (y1 - y0)) ** 2);
                // distance from defender to attacking player 1
                const d1 = (x1 - x0) ** 2 + (y1 - y0) ** 2;
                // distance from defender to attacking player 2
                const d2 = (x2 - x0) ** 2 + (y2 - y0) ** 2;

                if ((dist < d ** 2 && s > 0 && s < 1) || d1 < d ** 2 || d2 < d ** 2) {
                    canPass = 0;
                    break;
                }
            }

            row.push(canPass);
        }

        pairs.push(row);
    }

    console.log('pairs = ', pairs)
    // solver
    solve = (index, s) => {
        if (s.includes(attackingPlayers[attackingPlayers.length - 1])) return true;
        for (let i = 0; i < pairs[index].length; i++) {
            if (!s.includes(pairs[index][i])) {
                s.push(pairs[index][i]);

                if (solve(pairs[index][i], s)) {
                    return 1;

                } else s.pop();
            }
        }

        return 0
    }

    // for (i in pairs)
    //     if (solve(i, [i]))
    //         return r

    for (let i = pairs.length - 1; i >= 0; i--) {
        if (solve(i, [i])) {
            return r;
        }
    }
    return []
}