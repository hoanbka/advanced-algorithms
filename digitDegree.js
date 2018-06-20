// Gugo(Hoan Nguyen) solution
function digitDegree(n) {
    if (n <= 9) return 0;

    let count = 0;
    while (n >= 10) {
        count++;

        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = n / 10 << 0;
        }
        n = sum;
    }
    return count;
}


//Copthuy solution
function digitDegree(n) {

    for (var result = 0; n >= 10;) {
        result += 1;
        var sum = 0;

        for (var k = n; k; k = Math.floor(k / 10))
            sum += k % 10;

        n = sum;
    }

    return result;
}


//To Van Lam solution
function digitDegree(n) {
    if (n < 10) return 0;
    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = n / 10 << 0;
    }
    return 1 + digitDegree(sum);
}