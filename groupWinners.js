function groupWinners(groupTeams, partialResults) {
    let map = {},
        score = {},
        possible = new Set()
    for (let i = 0; i < 4; i++) {
        map[groupTeams[i]] = new Set()
        score[groupTeams[i]] = 0
        for (let j = 0; j < 4; j++) {
            i !== j && map[groupTeams[i]].add(groupTeams[j])
        }
    }

    partialResults.map(([team1, team2, result]) => {
        if (result === 'win') score[team1] += 3
        if (result === 'lose') score[team2] += 3
        if (result === 'draw') {
            score[team1] += 1
            score[team2] += 1
        }
        map[team1].delete(team2)
        map[team2].delete(team1)
    })
    
    let pairs = []
    for (let team in map) {
        Array.from(map[team]).forEach(rival => {
            pairs.push([team, rival])
            map[rival].delete(team)
            if (!map[rival].size) delete[map][rival]
        })
    }

    function play(id) {
        if (id === pairs.length) {
            let rank = {}
            for (let team in score) {
                const val = score[team]
                rank[val] ? rank[val].push(team) : rank[val] = [team]
            }
            rank = Object.values(rank)
            const bestTeam = rank.pop(),
                goodTeam = rank.pop(),
                remain = bestTeam.length > 1 ? bestTeam : goodTeam
            for (let team1 of bestTeam) {
                for (let team2 of remain) {
                    team1 !== team2 &&
                        possible.add([team1, team2].sort().join(`$`))
                }
            }
            return
        }
        const result = [
                [3, 0],
                [1, 1],
                [0, 3]
            ],
            [team1, team2] = pairs[id]
        result.map(([score1, score2], i) => {
            score[team1] += score1
            score[team2] += score2
            play(id + 1)
            score[team1] -= score1
            score[team2] -= score2
        })
    }
    play(0)
    return Array.from(possible).map(v => v.split(`$`))
}