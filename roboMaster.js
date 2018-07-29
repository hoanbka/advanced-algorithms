function roboMaster(shots) {
    let red = {
        'red 1': 1,
        'red 2': 2,
        'red 3': 5,
        'red 4': 1,
        'red 5': 1,
        'red base': 10
    }

    let blue = {
        'blue 1': 1,
        'blue 2': 2,
        'blue 3': 5,
        'blue 4': 1,
        'blue 5': 1,
        'blue base': 10
    }

    hasBotDestroyedRed = false
    hasBotDestroyedBlue = false

    for (let i = 0; i < shots.length; i++) {
        let damage = shots[i][2] == '17mm' ? 0.05 : 0.5
        let gotFiredBot = shots[i][1]

        if (gotFiredBot == 'red base') {
            if (hasBotDestroyedRed) red[gotFiredBot] -= damage
            else continue;
        } else if (gotFiredBot == 'blue base') {
            if (hasBotDestroyedBlue) blue[gotFiredBot] -= damage
            else continue
        }

        if (blue[gotFiredBot]) {
            blue[gotFiredBot] -= damage
            if (blue[gotFiredBot] <= 0) hasBotDestroyedBlue = true
        } else {
            red[gotFiredBot] -= damage;
            if (red[gotFiredBot] <= 0) hasBotDestroyedRed = true
        }
    }


    if (red['red base'] < blue['blue base']) return 'blue'
    else if (red['red base'] > blue['blue base']) return 'red'

    let redValues = Object.values(red).reduce((a, b) => a + b, 0)
    let blueValues = Object.values(blue).reduce((a, b) => a + b, 0)

    return redValues == blueValues ? 'draw' : redValues > blueValues ? 'red' : 'blue'
}




shots = [
    ["red 4", "blue base", "17mm"],
    ["blue 5", "red 2", "17mm"],
    ["red 5", "blue 4", "17mm"],
    ["blue 1", "red 4", "17mm"],
    ["red 1", "blue 2", "17mm"],
    ["red 2", "blue 3", "42mm"],
    ["red 4", "blue base", "17mm"],
    ["red 2", "blue base", "42mm"],
    ["red 1", "blue 2", "17mm"],
    ["red 2", "blue 2", "17mm"],
    ["blue 1", "red base", "17mm"],
    ["red 4", "blue 4", "17mm"],
    ["blue 2", "red 4", "42mm"],
    ["red 4", "blue 4", "17mm"],
    ["blue 2", "red 5", "42mm"],
    ["red 5", "blue 1", "17mm"],
    ["blue 4", "red base", "17mm"],
    ["red 4", "blue 3", "17mm"],
    ["blue 4", "red 4", "17mm"],
    ["blue 4", "red 4", "17mm"],
    ["red 5", "blue 4", "17mm"],
    ["blue 4", "red 1", "17mm"],
    ["blue 2", "red 1", "42mm"],
    ["blue 4", "red 3", "17mm"],
    ["blue 4", "red 4", "17mm"],
    ["blue 1", "red 4", "17mm"],
    ["red 5", "blue base", "17mm"],
    ["red 1", "blue 1", "17mm"],
    ["blue 5", "red 1", "17mm"],
    ["red 5", "blue 4", "17mm"],
    ["red 4", "blue 2", "17mm"],
    ["blue 1", "red 2", "17mm"],
    ["blue 1", "red 2", "17mm"],
    ["red 1", "blue 3", "17mm"],
    ["blue 1", "red 1", "17mm"],
    ["red 2", "blue 4", "17mm"],
    ["red 5", "blue 2", "17mm"],
    ["blue 2", "red 2", "42mm"],
    ["red 2", "blue 4", "42mm"],
    ["red 2", "blue 3", "42mm"],
    ["blue 4", "red 4", "17mm"],
    ["blue 2", "red 1", "17mm"],
    ["blue 1", "red 5", "17mm"],
    ["blue 5", "red base", "17mm"],
    ["red 1", "blue base", "17mm"],
    ["red 5", "blue 5", "17mm"],
    ["blue 5", "red 2", "17mm"],
    ["blue 1", "red 4", "17mm"],
    ["blue 1", "red 1", "17mm"],
    ["blue 1", "red base", "17mm"],
    ["blue 2", "red 1", "42mm"],
    ["red 2", "blue 1", "42mm"],
    ["blue 2", "red 2", "17mm"],
    ["red 2", "blue 4", "42mm"],
    ["blue 2", "red 3", "17mm"],
    ["blue 1", "red 2", "17mm"],
    ["red 4", "blue base", "17mm"],
    ["red 5", "blue 2", "17mm"],
    ["red 4", "blue 5", "17mm"]
]

console.log(roboMaster(shots))