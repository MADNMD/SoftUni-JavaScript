const { expect } = require('chai');
const isSymmetric = require('./05checkForSymmetry');

describe('Check for symmetry array', () => {

    it('Test 1: Return true if array of numbers is correct ', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('Test 2: Return true if array of strings is correct', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    })

    it('Test 3: Return false if 1 element of array is string', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false;
    });

    it('Test 4: Return false if array is with odd elements', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('Test 5: Return true if is symmetic odd array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })

    it('Test 6: Return false if input is string', () => {
        expect(isSymmetric('JavaScript')).to.be.false;
    });

    it('Test 7: Return false if array is incorrect', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });
});