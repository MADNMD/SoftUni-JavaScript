const { expect } = require('chai');
const { findNewApartment } = require('./03.findApartment');

describe('Testing findNewApartment methods', () => {

    describe('Test isGoodLocation method', () => {

        it('Test 1: ', () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation(false, true)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation(null, true)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error);

            expect(() => findNewApartment.isGoodLocation('', '')).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation('', 1)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation('', null)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation('', undefined)).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation('', [])).to.throw(Error);
            expect(() => findNewApartment.isGoodLocation('', {})).to.throw(Error);
        });

        it('Test 2: ', () => {
            expect(findNewApartment.isGoodLocation('a', true)).to.be.equal('This location is not suitable for you.');
        });

        it('Test 3: ', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.be.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.be.equal('You can go on home tour!');
        });

        it('Test 4: ', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.be.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.be.equal('There is no public transport in area.');
        });
    });
    describe('Test isLargeEnough method', () => {

        it('Test 1: ', () => {
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough('', 1)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough(null, 1)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough(undefined, 1)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough({}, 1)).to.throw(Error);

            expect(() => findNewApartment.isLargeEnough([1, 2, 3], '')).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough([1, 2, 3], [])).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough([1, 2, 3], {})).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough([1, 2, 3], null)).to.throw(Error);
            expect(() => findNewApartment.isLargeEnough([1, 2, 3], undefined)).to.throw(Error);
        });

        it('Test 2: ', () => {
            expect(findNewApartment.isLargeEnough([40], 40)).to.be.equal('40');
            expect(findNewApartment.isLargeEnough([40, 50], 50)).to.be.equal('50');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.be.equal('50, 60');
            expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.be.equal('40, 50, 60');
        });
    });
    describe('Test isItAffordable method', () => {

        it('Test 1: ', () => {
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable('', 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable([], 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable({}, 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(null, 1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(undefined, 1)).to.throw(Error);

            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, -1)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, '')).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, [])).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, {})).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, null)).to.throw(Error);
            expect(() => findNewApartment.isItAffordable(1, undefined)).to.throw(Error);
        });
        
        it('Test 2: ', () => {
            expect(findNewApartment.isItAffordable(1,2)).to.be.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(1,1)).to.be.equal('You can afford this home!');
        });

        it('Test 3: ', () => {
            expect(findNewApartment.isItAffordable(2,1)).to.be.equal('You don\'t have enough money for this house!');
        });
    });
});
