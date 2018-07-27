function maxPoints(matches, goalsFor, goalsAgainst) {
    if (goalsFor == 0) {
        if (goalsAgainst == 0) return matches;
        if (matches == 1) return 0;
        return matches - 1;
    }

    if (goalsFor < matches) {

        if (goalsAgainst == 0) {
            return goalsFor * 3 + (matches - goalsFor);
        }
        return goalsFor * 3 + (matches - 1 - goalsFor);

    } else if (goalsFor == matches) {
        if (goalsAgainst == 0) return matches * 3;
        if ((goalsFor - (matches - 1)) == goalsAgainst) return (matches - 1) * 3 + 1;
        return (matches - 1) * 3;
    }

    // if (goalsFor > matches)
    if (matches === 1) {
        if (goalsFor < goalsAgainst) return 0;
        else if (goalsFor === goalsAgainst) return 1;
        return 3;
    }

    if ((goalsFor - (matches - 1)) == goalsAgainst) return (matches - 1) * 3 + 1;
    if ((goalsFor - (matches - 1)) > goalsAgainst) return matches * 3;
    return (matches - 1) * 3;

}

function maxPoints(matches, goalsFor, goalsAgainst) {
    if ((goalsFor - goalsAgainst) >= matches)
        return matches * 3;
    if (goalsFor > --matches)
        return matches * 3 + ((goalsFor - matches) >= goalsAgainst);
    return (goalsFor * 3 + (matches - goalsFor));
}


maxPoints = (matches, goalsFor, goalsAgainst) => {
    return (goalsFor - goalsAgainst) >= matches ? matches * 3 : goalsFor > --matches ? matches * 3 + ((goalsFor - matches) >= goalsAgainst) : (goalsFor * 3 + (matches - goalsFor))
}

maxPoints = (m, g, a) => g - a >= m ? m * 3 : g > --m ? m * 3 + (g - m >= a) : g * 2 + m