const expect = require('chai').expect;
const sum = require('./04sumNumbers');

describe('Problem Sum Numbers Test', () => {

    it('Test 1: Works with array of numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).to.be.equal(15);
    });

    it('Test 2: Works with array of numbers as string', () => {
        expect(sum(['1', '2', '3', '4', '5'])).to.be.equal(15);
    });
    
    it('Test 3: Return NaN when one element of array is string', () => {
        expect(sum(['1','2','test','4','5'])).to.be.NaN;
    });
});