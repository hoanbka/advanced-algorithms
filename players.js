theBestTeam = players => {
    /*
     * For each position (goalkepper, defenders, ...) 
     * sort players by rating descending
     * generate permutation of the order to pick a player from a position
     * Update the maximum
     * (We need 1 goalkeeper, 4 defenders, midfielders, and 3 forwards)
     */

    let club = [],
        team = `01111222333`.split ``,
        max = 0
    for (let i = 0; i < 4; i++) {
        club[i] = players.map((_, v) => v).sort((a, b) => players[b][i] - players[a][i])
    }

    for (let i = 0; i < 1000; i++) {
        visited = []
        sum = 0
        team.sort(_ => Math.random() - .5).map(w => {
            let k = 0
            while (visited[playerID = club[w][k]]) k++
                visited[playerID] = 1
            sum += players[playerID][w]
        })
        max = Math.max(max, sum)
    }
    return max


}