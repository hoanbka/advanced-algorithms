//https://codefights.com/challenge/Kk33RmP8zx8TskgpW
function danceStripes(s) {
    let ans1;
    let x = (-3 + Math.sqrt(9 + 8 * s)) / 2;
    if (x % 1 === 0) ans1 = x;

    let n = Math.round(x);
    let row;
    let max;
    let ans;

    while (n > 1) {
        row = 2;
        while (true) {

            temp = row * (n + 1) * n / 2 + n * ((row + 1) * row) / 2;
            if (temp == s) {
                ans = n * row;
                if (!max) max = ans;
                else max = Math.max(max, ans);
                break;
            }
            if (temp > s) {
                break;
            }
            row++;
        }
        n--;
    }

    return max && ans1 ? Math.max(max, ans1) : max && !ans1 ? max : !max && ans1 ? ans1 : -1;
}