const { expect } = require('chai');
const { chooseYourCar } = require('./03chooseYourCar');

describe('Choose your car function', () => {
    describe('Testing choosingType function', () => {

        it('Test 1: Is the year valid', () => {
            expect(() => { chooseYourCar.choosingType('', '', 1899) }).to.throw(Error);
            expect(() => { chooseYourCar.choosingType('', '', 2023) }).to.throw(Error);
        });

        it('Test 2: Is the type Sedan', () => {
            expect(() => { chooseYourCar.choosingType('coupe', '', 2015) }).to.throw(Error);
        });

        it('Test 3: Will we pick the car', () => {
            expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.be.equal('This black Sedan meets the requirements, that you have.');
            expect(chooseYourCar.choosingType('Sedan', 'black', 2011)).to.be.equal('This black Sedan meets the requirements, that you have.');
        });

        it('Test 4: We will not pick the car', () => {
            expect(chooseYourCar.choosingType('Sedan', 'pink', 2009)).to.be.equal('This Sedan is too old for you, especially with that pink color.');
        });
    });
    describe('Testting brandName function', () => {

        it('Test 1: Input is not valid', () => {
            expect(() => { chooseYourCar.brandName([], '') }).to.throw(Error);
            expect(() => { chooseYourCar.brandName([], undefined) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName([], null) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName([], []) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName([], {}) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName('', 1) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName({}, 1) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName(undefined, 1) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName(null, 1) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName(1) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName(['Bmw', 'Mercedes', 'Audi'], 3) }).to.throw(Error);
            expect(() => { chooseYourCar.brandName(['Bmw', 'Mercedes', 'Audi'], -1) }).to.throw(Error);
        });

        it('Test 2: Valid input', () => {
            expect(chooseYourCar.brandName(['Bmw', 'Mercedes', 'Audi'], 1)).to.be.equal('Bmw, Audi');
            expect(chooseYourCar.brandName(['Bmw', 'Audi'], 1)).to.be.equal('Bmw');
        });
    });
    describe('Testing carFuelConsumption function', () => {

        it('Test 1: Input is not valid', () => {
            expect(() => { chooseYourCar.carFuelConsumption(1, '') }).to.Throw(Error);
            expect(() => { chooseYourCar.carFuelConsumption(1, -1) }).to.Throw(Error);
            expect(() => { chooseYourCar.carFuelConsumption(1, 0) }).to.Throw(Error);
            expect(() => { chooseYourCar.carFuelConsumption(-1, 1) }).to.Throw(Error);
            expect(() => { chooseYourCar.carFuelConsumption('', 1) }).to.Throw(Error);
            expect(() => { chooseYourCar.carFuelConsumption(0, 1) }).to.Throw(Error);
        });

        it('Test 2: Checking the consumption', () => {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.be.equal('The car burns too much fuel - 8.00 liters!');
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.be.equal('The car is efficient enough, it burns 6.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.be.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });
    });
});