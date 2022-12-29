const { expect } = require('chai');
const { mathEnforcer } = require('./04mathEnforcer');

describe('Math Operation', () => {

    let istance = null;

    beforeEach(() => {
        istance = mathEnforcer;
    });

    it('All function', () => {
        expect(istance).to.has.ownProperty('addFive');
        expect(istance).to.has.ownProperty('subtractTen');
        expect(istance).to.has.ownProperty('sum');
    });

    describe('Test addFive Finction', () => {

        it('Test 1: If the input is non-numeric', () => {
            expect(istance.addFive('1')).to.be.undefined;
            expect(istance.addFive([])).to.be.undefined;
            expect(istance.addFive({})).to.be.undefined;
            expect(istance.addFive(null)).to.be.undefined;
            expect(istance.addFive(undefined)).to.be.undefined;
            expect(istance.addFive()).to.be.undefined;
        });

        it('Test 2: If the input is number', () => {
            expect(istance.addFive(5)).to.be.equal(10);
            expect(istance.addFive(5.5)).to.be.equal(10.5);
            expect(istance.addFive(-5)).to.be.equal(0);
        });
    });

    describe('Test subtractTen Function', () => {

        it('Test 1: If the input is non-numeric', () => {
            expect(istance.subtractTen('1')).to.be.undefined;
            expect(istance.subtractTen([])).to.be.undefined;
            expect(istance.subtractTen({})).to.be.undefined;
            expect(istance.subtractTen(null)).to.be.undefined;
            expect(istance.subtractTen(undefined)).to.be.undefined;
            expect(istance.subtractTen()).to.be.undefined;
        });

        it('Test 2: If the input is numeric', () => {
            expect(istance.subtractTen(10)).to.be.equal(0);
            expect(istance.subtractTen(10.5)).to.be.equal(0.5);
            expect(istance.subtractTen(-10)).to.be.equal(-20);
        })
    });

    describe('Test sum Function', () => {

        it('Test 1: If one or two of paramters are non-numeric', () => {
            expect(istance.sum('1', '1')).to.be.undefined;
            expect(istance.sum('1', 1)).to.be.undefined;
            expect(istance.sum(1, '1')).to.be.undefined;
            expect(istance.sum([], 1)).to.be.undefined;
            expect(istance.sum(1, [])).to.be.undefined;
            expect(istance.sum({}, 1)).to.be.undefined;
            expect(istance.sum(1, {})).to.be.undefined;
            expect(istance.sum(null, 1)).to.be.undefined;
            expect(istance.sum(1, null)).to.be.undefined;
            expect(istance.sum(undefined, 1)).to.be.undefined;
            expect(istance.sum(1, undefined)).to.be.undefined;
            expect(istance.sum(1)).to.be.undefined;
            expect(istance.sum()).to.be.undefined;
        });

        it('Test 2: If two parametes are numeric', () => {
            expect(istance.sum(10, 5)).to.be.equal(15);
            expect(istance.sum(-10, -5)).to.be.equal(-15);
            expect(istance.sum(10.6, 5.5)).to.be.equal(16.1);
        })
    });
})