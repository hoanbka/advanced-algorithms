function notTheBestFan(contests, yourFavourite) {
    const response = ('' + require('child_process')
        .execSync(`curl -H Content-Type:application/json http://codeforces.com/api/contest.standings?contestId=566&from=1&count=5&showUnofficial=true`))
    const jsonResults = JSON.parse(response)
    console.log(jsonResults.result.rows)
}


notTheBestFan([464, 512], "Petr")