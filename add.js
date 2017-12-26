var calculator = module.exports = {

    add: function (a, b) {
        return a + b;
    },
    substract: function (a, b) {
        return a - b;
    },
    mutil: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        if (b === 0) {
            throw new Error("Can not divide by zero");
        } else {
            return a / b;
        }
    }
}

