const { expect } = require('chai');
const { rentCar } = require('./03rentCar');

describe('Testing object rentCar and his methods', () => {

    describe('Test searchCar method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { rentCar.searchCar([], 1) }).to.throw(Error);
            expect(() => { rentCar.searchCar([], {}) }).to.throw(Error);
            expect(() => { rentCar.searchCar([], null) }).to.throw(Error);
            expect(() => { rentCar.searchCar([], undefined) }).to.throw(Error);
            expect(() => { rentCar.searchCar([], []) }).to.throw(Error);

            expect(() => { rentCar.searchCar(1, '') }).to.throw(Error);
            expect(() => { rentCar.searchCar('', '') }).to.throw(Error);
            expect(() => { rentCar.searchCar({}, '') }).to.throw(Error);
            expect(() => { rentCar.searchCar(null, '') }).to.throw(Error);
            expect(() => { rentCar.searchCar(undefined, '') }).to.throw(Error);
        });

        it('Test 2: If there is no matching', () => {
            expect(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mercedes') }).to.throw(Error);
        });

        it('Test 3: The string shoud be in the array', () => {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.be.equal('There is 1 car of model BMW in the catalog!');
        });
    });
    describe('Test calculatePriceOfCar method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { rentCar.calculatePriceOfCar('', '') }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar('', -1) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar('', []) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar('', {}) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar('', null) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar('', undefined) }).to.throw(Error);

            expect(() => { rentCar.calculatePriceOfCar(1, 1) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar([], 1) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar({}, 1) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar(null, 1) }).to.throw(Error);
            expect(() => { rentCar.calculatePriceOfCar(undefined, 1) }).to.throw(Error);
        });

        it('Test 2: If model is not in catalog', () => {
            expect(() => { rentCar.calculatePriceOfCar('Hundai', 5) }).to.throw(Error);
        });

        it('Test 3: If the car is rented', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 1)).to.be.equal('You choose BMW and it will cost $45!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 2)).to.be.equal('You choose Mercedes and it will cost $100!');
        });
    });
    describe('Test checkBudget method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { rentCar.checkBudget('', 1, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget([], 1, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget({}, 1, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(null, 1, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(undefined, 1, 1) }).to.throw(Error);

            expect(() => { rentCar.checkBudget(1, '', 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, [], 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, {}, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, null, 1) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, undefined, 1) }).to.throw(Error);

            expect(() => { rentCar.checkBudget(1, 1, '') }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, 1, []) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, 1, {}) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, 1, null) }).to.throw(Error);
            expect(() => { rentCar.checkBudget(1, 1, undefined) }).to.throw(Error);
        });

        it('Test 2: If budget is enough', () => {
            expect(rentCar.checkBudget(10, 1, 10)).to.be.equal('You rent a car!');
            expect(rentCar.checkBudget(10, 1, 11)).to.be.equal('You rent a car!');
        });

        it('Test 3: If budget is not enough', () => {
            expect(rentCar.checkBudget(10, 1, 9)).to.be.equal('You need a bigger budget!');
        });
    });
});