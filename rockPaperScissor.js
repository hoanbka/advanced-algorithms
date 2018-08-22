function rockPaperScissor(opponent) {
    let you = 'S';
    let arr = [];

    let wins = 0,
        losses = 0,
        draws = 0;

    let hash = {
        'S': 0,
        'P': 0,
        'R': 0
    }

    let isFirst = true;

    for (let i = 0; i < opponent.length; i++) {

        if (you == 'R' && opponent[i] == 'S' ||
            you == 'S' && opponent[i] == 'P' ||
            you == 'P' && opponent[i] == 'R') {

            wins++;
            hash[you]++;
            arr.push(you);
            you = opponent[i];


        } else if (you !== opponent[i]) {

            losses++;
            hash[you]++;
            arr.push(you);

            if (you == 'S') you = 'P';
            else if (you == 'P') you = 'R';
            else you = 'S';


        } else {
            // draw
            draws++;
            hash[you]++;
            arr.push(you);

            if (isFirst) {
                isFirst = false
                you = 'R'
                continue
            }

            let temp = [
                [hash['S'], arr.lastIndexOf('S'), 'S'],
                [hash['P'], arr.lastIndexOf('P'), 'P'],
                [hash['R'], arr.lastIndexOf('R'), 'R']
            ]

            temp.sort((a, b) => a[0] - b[0] || b[1] - a[1])
            you = temp[0][2]
        }
    }

    return [wins, losses, draws]
}
