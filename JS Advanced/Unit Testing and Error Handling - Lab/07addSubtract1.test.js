const expect = require('Chai').expect;
const { createCalculator } = require('./07addSubtract1');

describe('Calculator', () => {

    it('Test 1: Function returns object', () => {
        expect(typeof createCalculator()).to.be.equal('object');
    });

    it('Test 2: Object returns function add', () => {
        expect(typeof createCalculator().add).to.be.equal('function');
    });

    it(`Test 3: Object returns function subtract`, () => {
        expect(typeof createCalculator().subtract).to.be.equal("function");
    });

    it('Test 4: Object returns function get', () => {
        expect(typeof createCalculator().get).to.be.equal('function');
    });

    it('Test 5: Internal sum can`t be modified', () => {
        expect(createCalculator().value).to.be.undefined;
    });

    it('Test 6: Add function accepts parameters', () => {
        const calculator = createCalculator();
        calculator.add('1');
        expect(calculator.get()).to.be.equal(1);
    });

    it('Test 7: Subtract function accepts parameters', () => {
        const calculator = createCalculator();
        calculator.subtract('1');
        expect(calculator.get()).to.be.equal(-1);
    });
})