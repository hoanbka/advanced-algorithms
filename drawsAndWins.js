function drawsAndWins(teams, points) {
    let ans = [];
    if (points == 0) return [
        [0, 0]
    ];
    for (let draws = 0; draws <= teams - 1; draws++) {
        if ((points - draws) % 3 === 0 && (points - draws) / 3 + draws < teams) ans.push([draws, (points - draws) / 3])
    }
    return ans
}