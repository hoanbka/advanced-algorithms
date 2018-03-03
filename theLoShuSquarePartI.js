function theLoShuSquarePartI(year) {
    var start = 2013;
    var arr = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ]
    var temp = (year - start);
    if (temp % 9 === 0) return arr;

    if (temp < 0) {
        for (var i = 0; i < arr.length; i++) {

            for (var j = 0; j < arr.length; j++) {
                var t = -temp;

                while (t > 0) {
                    arr[i][j]++;

                    if (arr[i][j] > 9) arr[i][j] = 1;
                    t--;
                }

            }
        }
    } else {
        for (var i = 0; i < arr.length; i++) {

            for (var j = 0; j < arr.length; j++) {
                var t = temp;

                while (t > 0) {
                    arr[i][j]--;

                    if (arr[i][j] <= 0) arr[i][j] = 9;
                    t--;
                }

            }
        }
    }
    return arr;
}