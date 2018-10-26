function scariestMask(mask) {
    let count = 0;
    for (let i = 0; i < mask.length; i++) {

        let min = 0;
        let max = mask[i].length - 1;

        while (min < max) {
            count += mask[i][min] != mask[i][max] ? 1 : 0

            min++
            max--;
        }
    }
    return count;
}