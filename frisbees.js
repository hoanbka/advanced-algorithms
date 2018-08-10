function frisbees(friends, numberOfPasses, startingPlayer) {
    // an array to keep track the held times of each player
    let arr = new Array(friends.length).fill(0);
    arr[startingPlayer] = 1;
    // calculate an array of distances of each player
    // that he CAN throw a disc (throwingRange >= distance btw 2 players)
    // distance = ((x1 - x2)**2 + (y1 - y2)**2)**.5
    // we also can compare : throwingRange**2 >= (x1 - x2)**2 + (y1 - y2)**2

    let hash = distanceAndIndicesMap(friends);

    // total of passes so far
    let soFarPasses = 0;

    // keep track the current player
    let currPlayerIndex = startingPlayer;

    while (soFarPasses < numberOfPasses) {

        // find the next player to pass a disc
        // then update currPlayer, increase soFarPasses
        let indices = hash[currPlayerIndex].indices;
        let distances = hash[currPlayerIndex].distance;
        let obj = {};

        distances.map(e => obj[e[1]] = e[0]);

        let expected = {
            heldTimes: arr[indices[0]],
            distance: obj[indices[0]],
            index: indices[0]
        }

        for (let k = 1; k < indices.length; k++) {

            // compare heldTimes
            if (arr[indices[k]] < expected.heldTimes) {

                updateInfo(expected, arr[indices[k]], obj[indices[k]], indices[k])

            } else if (arr[indices[k]] == expected.heldTimes) {

                // compare distances
                if (expected.distance > obj[indices[k]]) continue;

                else if (expected.distance < obj[indices[k]]) {
                    updateInfo(expected, arr[indices[k]], obj[indices[k]], indices[k])

                } else {
                    // compare indices
                    if (expected.index < indices[k]) continue;
                    else {
                        updateInfo(expected, arr[indices[k]], obj[indices[k]], indices[k])
                    }
                }
            }
        }

        // update currPlayerIndex
        currPlayerIndex = expected.index;
        arr[currPlayerIndex]++;
        soFarPasses++;
    }

    return currPlayerIndex;
}

function updateInfo(obj, heldTimes, distance, index) {
    obj.heldTimes = heldTimes
    obj.distance = distance
    obj.index = index
    return obj;
}

function distanceAndIndicesMap(friends) {
    let hash = {};

    for (let i = 0; i < friends.length; i++) {

        let temp = [];
        let indices = [];

        for (let j = 0; j < friends.length; j++) {
            if (i == j) continue;
            let distance = (friends[i][0] - friends[j][0]) ** 2 + (friends[i][1] - friends[j][1]) ** 2
            if (friends[i][2] ** 2 >= distance) {
                temp.push([distance, j])
                indices.push(j);
            }
        }

        hash[i] = { 'distance': temp, 'indices': indices };
    }

    return hash
}
