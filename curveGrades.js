function curveGrades(percentages) {

    let mu = percentages.reduce((a, b) => a + b, 0) / (percentages.length);

    let sigma;
    let sum = 0;
    for (let i in percentages) {
        sum += (percentages[i] - mu) ** 2;
    }

    sigma = (sum / (percentages.length - 1)) ** .5;
    let ans = [];

    for (let i in percentages) {
        let temp = gradesClassify(percentages[i], mu, sigma);
        ans.push(temp)
    }
    return ans;
}

function gradesClassify(grade, mu, sigma) {
    if (grade >= mu + sigma) return 'A';
    else if (grade >= mu) return 'B';
    else if (grade >= mu - sigma) return 'C';
    else if (grade >= mu - 2 * sigma) return 'D';
    return 'F';
}