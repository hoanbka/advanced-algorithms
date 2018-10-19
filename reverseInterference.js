c = t = 0
reverseInterference = (x, y, X, Y) => {

    for (i in x) {
        if (x[i] == X[i] & y[i] == Y[i]) {
            if (t) {
                c++
                t = 0
            }
        } else if (x[i] == Y[i] & y[i] == X[i]) {
            if (++t == 3) {
                c++
                t = 0
            }
        } else return -1
    }

    return t ? ++c : c
}