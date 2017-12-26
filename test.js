var assert = require('assert');
var calculator = require('./add.js');
var chess = require('./chessForThree.js');

describe('TEST FOR CALCULATOR', function () {
    before(function () {
        // Stuff to do before the tests, like imports, what not
    });

    describe('add()', function () {
        it('should return 9', function () {
            assert.equal(calculator.add(4, 5), 9);
        });
    });
    describe('check position return', function () {
        it('should return -1', function () {
            assert.equal([1, 2, 3, 4].indexOf(6), -1);
            assert.equal([1, 2, 3, 4].indexOf(4), 3);
        })
    })

    after(function () {
        // Anything after the tests have finished
    });
});


describe('TEST FOR CHESS', function () {
    describe('hi', function () {
        it('SHOULD RETURN YES', function () {
            assert.equal(chess(3, [1, 1, 2]), 'YES')
        })
    })
    describe('hi', function () {
        it('SHOULD RETURN YES', function () {
            assert.equal(chess(2, [1, 2]), 'NO')
        })
    })
})



// How to run test?
// => npm test