function studyOrSleep(familiarity, hoursRemaining) {

    let hour = 0;
    let curr = familiarity;
    let newFamiliarity;
    let unfamiliarity = 100 - familiarity;
    let expected = [curr];
    let penalty = 0;

    while (hoursRemaining > 0) {
        
        hour++;
        hoursRemaining--;

        let familiarityIncrease = unfamiliarity / 5;
        curr += familiarityIncrease;
        if (hoursRemaining < 8) penalty += 5;
        let temp = curr - penalty;

        expected.push(temp);
        unfamiliarity = 0.8 * unfamiliarity;

    }

    return expected.indexOf(Math.max(...expected))
}