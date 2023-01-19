const { expect } = require('chai');
const { carService } = require('./03carService');

describe('Tests carService methods', () => {

    describe('Test isItExpensive method', () => {

        it('Test 1: If the value of the parameter is qeual Engine ande Transmission', () => {
            expect(carService.isItExpensive('Engine')).to.be.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.be.equal('The issue with the car is more severe and it will cost more money');
        });

        it('Test 2: If the input is different from Engine and Transmission', () => {
            expect(carService.isItExpensive('Trubo')).to.be.equal('The overall price will be a bit cheaper');
        });
    });
    describe('Test discount method', () => {

        it('Test 1: If the input is invalid', () => {
            expect(() => { carService.discount('1', 1) }).to.throw(Error);
            expect(() => { carService.discount([], 1) }).to.throw(Error);
            expect(() => { carService.discount({}, 1) }).to.throw(Error);
            expect(() => { carService.discount(null, 1) }).to.throw(Error);
            expect(() => { carService.discount(undefined, 1) }).to.throw(Error);
            expect(() => { carService.discount(1, '1') }).to.throw(Error);
            expect(() => { carService.discount(1, []) }).to.throw(Error);
            expect(() => { carService.discount(1, {}) }).to.throw(Error);
            expect(() => { carService.discount(1, null) }).to.throw(Error);
            expect(() => { carService.discount(1, undefined) }).to.throw(Error);

        });

        it('Test 2: Valid discount', () => {
            expect(carService.discount(2, 100)).to.be.equal('You cannot apply a discount');
            expect(carService.discount(7, 100)).to.be.equal('Discount applied! You saved 15$');
            expect(carService.discount(8, 100)).to.be.equal('Discount applied! You saved 30$');
        });
    });
    describe('Test partsToBuy method', () => {

        it('Test 1: If the input is invalid', () => {
            expect(() => { carService.partsToBuy([], '') }).to.throw(Error);
            expect(() => { carService.partsToBuy([], 1) }).to.throw(Error);
            expect(() => { carService.partsToBuy([], {}) }).to.throw(Error);
            expect(() => { carService.partsToBuy([], undefined) }).to.throw(Error);
            expect(() => { carService.partsToBuy([], null) }).to.throw(Error);
            expect(() => { carService.partsToBuy('', []) }).to.throw(Error);
            expect(() => { carService.partsToBuy(1, []) }).to.throw(Error);
            expect(() => { carService.partsToBuy({}, []) }).to.throw(Error);
            expect(() => { carService.partsToBuy(undefined, []) }).to.throw(Error);
            expect(() => { carService.partsToBuy(null, []) }).to.throw(Error);
        });

        it('Test 2: When partsCatalog is empty', () => {
            expect(carService.partsToBuy([],["blowoff valve"])).to.be.equal(0);
        });

        it('Test 3: When buy parts', () => {
            expect(carService.partsToBuy([{part:'blowoff valve', price: 145}, {part: 'coil springs', price: 230}],['coil springs'])).to.be.equal(230);
        });
    });
})