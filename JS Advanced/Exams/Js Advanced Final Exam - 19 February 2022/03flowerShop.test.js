const { expect } = require('chai');
const { flowerShop } = require('./03flowersShop');

describe('Testing object flowerShop and his methods', () => {

    describe('Test calcPriceOfFlowers method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { flowerShop.calcPriceOfFlowers('', 1, '') }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', 1, []) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', 1, {}) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', 1, null) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', 1, undefined) }).to.throw(Error);

            expect(() => { flowerShop.calcPriceOfFlowers('', '', 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', [], 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', {}, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', null, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers('', undefined, 1) }).to.throw(Error);

            expect(() => { flowerShop.calcPriceOfFlowers(1, 1, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers([], 1, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers({}, 1, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers(null, 1, 1) }).to.throw(Error);
            expect(() => { flowerShop.calcPriceOfFlowers(undefined, 1, 1) }).to.throw(Error);
        });

        it('Test 2: Should be multiplies price and quantity', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 10, 1)).to.be.equal('You need $10.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Lily', 5, 0)).to.be.equal('You need $0.00 to buy Lily!');
        });
    });
    describe('Test checkFlowersAvailable method', () => {

        it('Test 1: Is it available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.be.equal('The Rose are available!');
        });

        it('Test 2: if is not  available flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Lily", "Orchid"])).to.be.equal('The Rose are sold! You need to purchase more!');
        });
    });
    describe('Test sellFlowers method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { flowerShop.sellFlowers([], -1) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers([], '') }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers([], []) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers([], {}) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers([], null) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers([], undefined) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], 2) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], 3) }).to.throw(Error);

            expect(() => { flowerShop.sellFlowers('', 1) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers({}, 1) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers(1, 1) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers(null, 1) }).to.throw(Error);
            expect(() => { flowerShop.sellFlowers(undefined, 1) }).to.throw(Error);
        });

        it('Test 2: If input is valid', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.be.equal('Rose / Orchid');
        });
    });
});