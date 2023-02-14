const { expect } = require('chai');
const { testNumbers } = require('./03.testNumbers');

describe('Testing methods on testNumbers object', () => {

    describe('Test sumNumbers method', () => {

        it('Test 1: whether the parameters are numbers', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, [])).to.be.undefined;
            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, undefined)).to.be.undefined;

            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
            expect(testNumbers.sumNumbers({}, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined, 1)).to.be.undefined;
        });
        it('Test 2: sum of two numbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
            expect(testNumbers.sumNumbers(0, 1)).to.be.equal('1.00');
            expect(testNumbers.sumNumbers(1.1, 1.2)).to.be.equal('2.30');
            expect(testNumbers.sumNumbers(-1, 1)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(-1, -1)).to.be.equal('-2.00');
        });
    });
    describe('Test numberChecker method', () => {

        it('Test 1: If the input is even number ', () => {
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
            expect(testNumbers.numberChecker(-2)).to.be.equal('The number is even!');
        });
        it('Test 2: If the input id odd number', () => {
            expect(testNumbers.numberChecker(-1)).to.be.equal('The number is odd!');
            expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!');
        });
        it('Test 3: If the input is not a number', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw(Error);
            expect(() => testNumbers.numberChecker(['a', 'b', 'c'])).to.throw(Error);
            expect(() => testNumbers.numberChecker({})).to.throw(Error);
        });
    });
    describe('Test averageSumArray method', () => {

        it('Test 1: Average sum', () => {
            expect(testNumbers.averageSumArray([1, 1])).to.be.equal(1);
            expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
            expect(testNumbers.averageSumArray([-1, 0, 1])).to.be.equal(0);
            expect(testNumbers.averageSumArray([1.1, 1.1, 1.1])).to.be.equal(1.1);
        });
    });
});