function canScore(attackingPlayers, defendingPlayers, d) {
    const adj = [];

    // build adjacency matrix based on who can complete a pass
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

        adj.push(row);
    }

    // bfs over adjacency matrix
    const queue = [0];
    const visited = new Set();

    while (queue.length) {
        const node = queue.shift();

        // made it to goal scorer?
        if (node === attackingPlayers.length - 1) return true;

        if (visited.has(node)) continue;
        visited.add(node);

        for (let next = 0; next < attackingPlayers.length; next++) {
            if (adj[node][next]) queue.push(next);
        }
    }

    // didn't make it to goal scorer
    return false;
}