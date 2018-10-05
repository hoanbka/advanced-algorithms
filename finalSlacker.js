function finalSlacker(weights, scores) {
    let grades = [90, 80, 70, 60, 0];

    let sum = [];
    let score = 0;
    for (let i = 0; i < scores.length; i++) {
        let temp = scores[i].reduce((a, b) => a + b, 0);
        let y = (i == 0) ? 10 : i == 1 ? 5 : 100;
        sum.push(temp / (scores[i].length * y))
        score += temp / (scores[i].length * y) * weights[i];
    }

    let min;
    for (let i = 0; i < grades.length; i++) {
        if (score >= grades[i]) {
            min = grades[i];
            break;
        }
    }


    let x;
    x = (min - weights[0] * sum[0] - weights[1] * sum[1]) / weights[2];

    let y;
    y = (scores[2].length + 1) * 100 * x;
    y = y - scores[2].reduce((a, b) => a + b, 0)
    return y <= 0 ? 0 : y % 1 == 0 ? y : parseInt(y) + 1;
}