// For a given number n, your task is to find how it can be expressed as the sum of two integers each raised to the power of k.

// You are to return the list of possibilities as an array of 2-element arrays of summands, sorted lexicographically.

// For n = 27 and k = 3, the output should be sumOfTwoPowers(n, k) = [[0, 27]].

// Since 27 can be expressed as the sum of two cubes, 0 ** 3 + 3 ** 3, we return [[0, 27]].

sumOfTwoPowers = (n, k, a = [], i = 0) => {
    for (;; i++) {

        if (i ** k > n) break
        for (j = i;; j++) {

            if (i ** k + j ** k == n) {
                a.push([i ** k, j ** k])
            } else if (i ** k + j ** k > n) break
        }
    }

    return a
}