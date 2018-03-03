function moveZeroesMadeByAlbert(arr) {

    var j = arr.length - 1;
    var i = 0;

    while (i < j) {

        if (arr[i] == 0) {

            if (arr[j] !== 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            } else {
                j--;
            }

        } else {

            i++;
        }

    }
    return arr;
}