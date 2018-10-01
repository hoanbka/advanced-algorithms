function studyOrSleep(familiarity, hoursRemaining) {

    let curr = familiarity,
        unfamiliarity = 100 - familiarity,
        expected = [curr],
        penalty = 0;

    while (hoursRemaining > 0) {

        hoursRemaining--;
        let increase = unfamiliarity / 5;
        curr += increase;

        if (hoursRemaining < 8) penalty += 5;
        let temp = curr - penalty;

        expected.push(temp);
        unfamiliarity = 0.8 * unfamiliarity;

    }

    return expected.indexOf(Math.max(...expected))
}
