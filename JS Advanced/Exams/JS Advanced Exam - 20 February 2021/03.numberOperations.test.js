const { expect } = require('chai');
const { numberOperations } = require('./03.numberOperations');

describe('Testing object method ', function () {

    describe('Test powNumber method', () => {

        it('Test 1: multiply number', () => {
            expect(numberOperations.powNumber(0)).to.be.equal(0);
            expect(numberOperations.powNumber(1)).to.be.equal(1);
            expect(numberOperations.powNumber(-1)).to.be.equal(1);
            expect(numberOperations.powNumber(2.4)).to.be.equal(5.76);
        });
    });
    describe('Test numberChecker method', () => {

        it('Test 1: If parameter in not a number', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw(Error);
            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error);
            expect(() => numberOperations.numberChecker(['a', 'b', 'c'])).to.throw(Error);
        });
        it('Test 2: If the number is smaller than 100', () => {
            expect(numberOperations.numberChecker(-1)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(1)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99.9)).to.be.equal('The number is lower than 100!');
        });
        it('Test 3: If the number is bigger than 100', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100.5)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!');
        });
    });
    describe('Test sumArrays method', () => {

        it('Test 1: The sum of two arrays', () => {
            expect(numberOperations.sumArrays([0], [0])).to.be.deep.equal([0]);
            expect(numberOperations.sumArrays([1], [1])).to.be.deep.equal([2]);
            expect(numberOperations.sumArrays([1, 2], [1])).to.be.deep.equal([2, 2]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.be.deep.equal([2, 4, 6]);
            expect(numberOperations.sumArrays([1.1, 2.1, 3.1], [1.1, 2.1, 3.1])).to.be.deep.equal([2.2, 4.2, 6.2]);
        });
    });
});