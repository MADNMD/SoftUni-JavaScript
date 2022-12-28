const { expect } = require('chai');
const isOddOrEven = require('./02evenOrOdd');

describe('Cheks string parameter whether is with evene or odd length', () => {

    it('Test 1: If parameter is number', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('Test 2: If parameter is array', () => {
        expect(isOddOrEven[1, 2, 3, 4, 5]).to.be.undefined;
    })

    it('Test 3: If parameter is object', () => {
        expect(isOddOrEven({
            Name: 'Pesho',
            age: 20,
        })).to.be.undefined;
    });

    it('Test 4: If empty', () => {
        expect(isOddOrEven()).to.be.undefined;
    });

    it('Test 5: If string parameter is with odd length', () => {
        expect(isOddOrEven('a')).to.be.equal('odd');
    });

    it('Test 6: If string parameter is with even length', () => {
        expect(isOddOrEven('ab')).to.be.equal('even');
    })
})