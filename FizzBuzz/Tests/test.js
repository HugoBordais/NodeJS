'use strict'

const expect = require('chai').expect

const nbMin = 1
const nbMax = 100


describe('Je vais faire mes tests', () => {

    it('Premier Test ', () => {
        for (let i = nbMin; i <= nbMax; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
                console.log('FizzBuzz - Multiple de 3 et 5')
            } else if (i % 3 == 0) {
                console.log('Fizz - Multiple de 3')
            } else if (i % 5 == 0) {
                console.log('Buzz - Multiple de 5')
            } else {
                console.log(i);
            }
        }
    });
})
