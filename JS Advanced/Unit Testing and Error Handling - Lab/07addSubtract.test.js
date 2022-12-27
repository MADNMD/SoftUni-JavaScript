const expect = require('Chai').expect;
const { createCalculator } = require('./07addSubtract');

describe('Calculator', () => {

    let istance = null;

    beforeEach(() => {
        istance = createCalculator();
    });

    it('All methods', () => {
        expect(istance).to.has.ownProperty('add');
        expect(istance).to.has.ownProperty('subtract');
        expect(istance).to.has.ownProperty('get');
    });

    it('Test 1: Starts empty', () => {
        expect(istance.get()).to.be.equal(0);
    });

    it('Test 2: Add single number', () => {
        expect(istance.add(1));
        expect(istance.get()).to.be.equal(1);
    });

    it('Test 3: Subtract single number', () => {
        expect(istance.subtract(1));
        expect(istance.get()).to.be.equal(-1);
    });

    it('Test 4: Add and subtract', () => {
        expect(istance.add(1));
        expect(istance.subtract(2));
        expect(istance.get()).to.be.equal(-1);
    });

    it('Test 5: Numbers as string', () => {
        expect(istance.add('1'));
        expect(istance.add('2'));
        expect(istance.subtract('4'));
        expect(istance.get()).to.be.equal(-1);
    });

    it('Test 6: Tetx', () => {
        expect(istance.add('JavaScript'));
        expect(istance.subtract(1));
        expect(istance.get()).to.be.NaN;
    });

    it('Test 7: Subtract multiple numbers', () => {
        expect(istance.subtract(1));
        expect(istance.subtract(2));
        expect(istance.get()).to.be.equal(-3);
    });

    it('Test 8: Add multiple numbers', () => {
        expect(istance.add(1));
        expect(istance.add(2));
        expect(istance.get()).to.be.equal(3);
    });
})