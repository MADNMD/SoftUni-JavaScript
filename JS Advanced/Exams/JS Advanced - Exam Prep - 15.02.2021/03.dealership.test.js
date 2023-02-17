const { expect } = require('chai');
const { dealership } = require('./03.dealership');

describe('Testing methods on "dealership" object', function () {

    describe('Test newCarCost method', () => {

        it('Test 1: If we have a discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 15001)).to.be.equal(1);
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.be.equal(0);
        });
        it('Test 2: If we have not a discount', () => {
            expect(dealership.newCarCost('BMW 535 E60', 10000)).to.be.equal(10000);
        });
    });
    describe('Test carEquipment method', () => {

        it('Test 1: Check the extras on my car', () => {
            expect(dealership.carEquipment(['a', 'b', 'c', 'd'], [0, 2])).to.be.deep.equal(['a', 'c']);
        });
    });
    describe ('Test euroCategory method', () => {

        it('Test 1: Check the eco category on car', () => {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(5)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});