function oneWordStory(words, sentences) {
    let ans = [];

    // a map to keep track which indices in words are picked
    let picked = {};
    words.map((e, i) => picked[i] = false)

    for (let i = 0; i < sentences.length; i++) {

        ans.push(sentences[i]);
        let lastWord = sentences[i].substr(sentences[i].lastIndexOf(' ') + 1);
        let max;
        let selectedWord;
        let index;

        for (let j = 0; j < words.length; j++) {
            // word at index j was picked, ignore it
            if (picked[j]) continue;

            if (max == undefined) {
                max = levenshteinDistance(lastWord, words[j]);
                selectedWord = words[j];
                index = j;
                continue;
            }

            let maxDiff = levenshteinDistance(lastWord, words[j]);
            if (maxDiff > max) {
                max = maxDiff;
                selectedWord = words[j];
                index = j;

            } else if (maxDiff == max) {
                if (words[j] > selectedWord) {
                    selectedWord = words[j];
                    index = j;
                }
            }
        }

        // update index of word that was just picked
        picked[index] = true;
        // console.log(`picked = ${JSON.stringify(picked)}`)
        ans.push(selectedWord);
    }

    return ans.join(' ')

}

// get Levenshtein distance btw two strings
function levenshteinDistance(str1, str2) {
    str1 = str1.split(``);
    str2 = str2.split(``);

    let distance = [],
        l = str1.length,
        m = str2.length,
        i, j;

    for (i = 0; i <= l; i++) distance[i] = [i]
    for (j = 0; j <= m; j++) distance[0][j] = j

    for (i = 1; i <= l; i++) {
        for (j = 1; j <= m; j++) {
            distance[i][j] = Math.min(distance[i - 1][j] + 1, distance[i][j - 1] + 1, distance[i - 1][j - 1] +
                ((str1[i - 1] == str2[j - 1]) ? 0 : 1));
        }
    }
    return distance[l][m];

};