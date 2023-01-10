const { expect } = require('chai');
const { motorcycleRider } = require('./03motorcycleRider');

describe('Tets', () => {

    describe('Test licenseRestriction function', () => {

        it('Test 1: If category is AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.be.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });

        it('Test 2: If categoty is A1', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.be.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });

        it('Test 3: If category is A2', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.be.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });

        it('Test 4: If category is A', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.be.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it('Test 5: If input is different', () => {
            expect(() => { motorcycleRider.licenseRestriction('JS') }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction(0) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction(1) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction(-1) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction({}) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction(null) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction(undefined) }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction('') }).to.throw(Error);
            expect(() => { motorcycleRider.licenseRestriction([]) }).to.throw(Error);
        });
    });
    describe('Test motorcycleShowroom function', () => {

        it('Test 1: Invalid input', () => {
            expect(() => { motorcycleRider.motorcycleShowroom('300', 300) }).to.throw(Error);
            expect(() => { motorcycleRider.motorcycleShowroom(['200', '300'], 'one') }).to.throw(Error);
            expect(() => { motorcycleRider.motorcycleShowroom([200, 300, 400], '1') }).to.throw(Error);
            expect(() => { motorcycleRider.motorcycleShowroom([], 200) }).to.throw(Error);
            expect(() => { motorcycleRider.motorcycleShowroom(['300'], -1) }).to.throw(Error);
            expect(() => { motorcycleRider.motorcycleShowroom(['300'], 49) }).to.throw(Error);
        });

        it('Test 2: Valid input', () => {
            expect(motorcycleRider.motorcycleShowroom(['50'], 50)).to.be.equal('There are 1 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([300, 250, 400, 500, 'five', -1], 600)).to.be.equal('There are 4 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([250, 550, 601, 49,], 600)).to.be.equal('There are 2 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom(['400', '350', '250', '550', 'fifty', '-49', '51'], 600)).to.be.equal('There are 5 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom([0], 50)).to.be.equal('There are 0 available motorcycles matching your criteria!');
        });
    });
    describe('Test otherSpendings function', () => {

        it('Test 1: Invalid input', () => {
            expect(() => motorcycleRider.otherSpendings(1, [], true)).to.throw(Error);
            expect(() => motorcycleRider.otherSpendings([], 1, true)).to.throw(Error);
            expect(() => { motorcycleRider.otherSpendings('helmet', ['oil filter'], true) }).to.throw(Error);
            expect(() => { motorcycleRider.otherSpendings(['helmet'], 'oil filter', true) }).to.throw(Error);
            expect(() => { motorcycleRider.otherSpendings(['helmet'], ['oil filter'], 0) }).to.throw(Error);
        })

        it('Test 2: Valid input', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], [], true)).to.be.equal('You spend $450.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['hemlet', 'jacked'], ['oil filter'], false)).to.be.equal('You spend $330.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil', 'oil filter'], false)).to.be.equal('You spend $300.00 for equipment and consumables!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], true)).to.be.equal('You spend $513.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings([],['engine oil', 'oil filter'], true)).to.be.equal('You spend $90.00 for equipment and consumables with 10% discount!');
        });
    });
});