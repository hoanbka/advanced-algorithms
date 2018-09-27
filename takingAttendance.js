function takingAttendance(classList) {
    let vowels = 'aeiouyAEIOUY'.split('');
    let ans = classList.length * 5;

    for (let i = 0; i < classList.length; i++) {
        let temp = '';
        for (let j = 0; j < classList[i].length; j++) {
            if (vowels.indexOf(classList[i][j]) !== -1) {
                if (!temp) continue;
                ans += Math.pow(2, temp.length - 1)
                temp = '';
            } else {
                temp += classList[i][j];
            }
        }

        if (temp) {
            ans += Math.pow(2, temp.length - 1)
        }
    }

    return ans;
}