function probabilityToWin(prob) {
    let opponents,
        len = prob.length,
        //dp[team][level] store the probability to win of a team at round:level
        //dp[team][level] = 
        //   dp[team][level - 1] * Sum of (dp[opponent(s)][level - 1] * prob[tem][opponent])
        dp = [],
        //The total number of rounds
        depth = Math.log2(len)
    //find possible opponents of a team at a round
    //+ After n round => team x belongs to group (x >> round) 
    //  => team x can be opponects of the teams 
    //     that belongs to group (x >> round) ^ 1 ater n round
    //  
    function findOpponents(group, level) {
        //switch to group of opponent teams at round: level
        group ^= 1
        //If at round 0 return the opponent team
        if (!level) return opponents.push(group)
        //Otherwise go back to the previous round
        //Find teams that belongs to group: (group * 2) and (group * 2 + 1)
        //Because if at round n, a team belongs to group x -> round (n + 1), group x >> 1
        //We reverse the process the find opponents
        findOpponents(group * 2, level - 1)
        findOpponents(group * 2 + 1, level - 1)
    }
    for (let i in prob) {
        dp[i] = []
        dp[i][0] = prob[i][+i ^ 1] / 100
    }
    for (let round = 1; round < depth; round++) {
        for (let team = 0; team < len; team++) {
            //reset opponents 
            opponents = []
            findOpponents(team >> round, round)
            dp[team][round] = dp[team][round - 1] *
                opponents.reduce((t, opp) =>
                    t += dp[opp][round - 1] * prob[team][opp] / 100, 0)
        }
    }
    return dp.map(_ => _[depth - 1] * 100)
}