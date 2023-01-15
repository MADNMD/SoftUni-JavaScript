const { expect } = require('chai');
const { movieTheater } = require('./03movieTheater');

describe('Test Movie Theater problem', () => {
    describe('Test ageRestrictions method', () => {

        it('Tets 1: Valid input', () => {

            expect(movieTheater.ageRestrictions('G')).to.be.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.be.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.be.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.be.equal('No one under 17 admitted to watch the movie');

        });

        it('Test 2: Invalid input', () => {
            expect(movieTheater.ageRestrictions('')).to.be.equal('There are no age restrictions for this movie');
        });
    });
    describe('Test moneySpent method', () => {

        it('Test 1: If first parameter is invalid', () => {
            expect(() => { movieTheater.moneySpent('1', [], []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(undefined, [], []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(null, [], []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent([], [], []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent({}, [], []) }).to.throw(Error);
        });

        it('Test 2: If second parameter is invalid', () => {
            expect(() => { movieTheater.moneySpent(1, undefined, []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, null, []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, '', []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, 1, []) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, {}, []) }).to.throw(Error);
        });

        it('Test 3: If third parameter is invalid', () => {
            expect(() => { movieTheater.moneySpent(1, [], undefined) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, [], null) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, [], 1) }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, [], '') }).to.throw(Error);
            expect(() => { movieTheater.moneySpent(1, [], {}) }).to.throw(Error);
        });

        it('Test 4: We validate the total price', () => {
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.be.equal('The total cost for the purchase is 29.50');
            expect(movieTheater.moneySpent(1, ['Nachos', 'Nachos', 'Popcorn', 'Popcorn'], ['Soda', 'Soda', 'Soda', 'Soda', 'Soda', 'Water'])).to.be.equal('The total cost for the purchase is 50.00');
            expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], ['Soda', 'Water', 'Water', 'Water', 'Water', 'Water'])).to.be.equal('The total cost for the purchase with applied discount is 40.40');
        });
    });
    describe('Test reservation method', () => {

        it('Test 1: If first parameter is invalid', () => {
            expect(() => { movieTheater.reservation(1, 1) }).to.throw(Error);
            expect(() => { movieTheater.reservation('1', 1) }).to.throw(Error);
            expect(() => { movieTheater.reservation({}, 1) }).to.throw(Error);
            expect(() => { movieTheater.reservation(undefined, 1) }).to.throw(Error);
            expect(() => { movieTheater.reservation(null, 1) }).to.throw(Error);
        });

        it('Test 2: If second paramete is invalid', () => {
            expect(() => { movieTheater.reservation([], '1') }).to.throw(Error);
            expect(() => { movieTheater.reservation([], undefined) }).to.throw(Error);
            expect(() => { movieTheater.reservation([], null) }).to.throw(Error);
            expect(() => { movieTheater.reservation([], {}) }).to.throw(Error);
            expect(() => { movieTheater.reservation([], []) }).to.throw(Error);
        });

        it('Test 3: Valid input', () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 1 }], 1)).to.be.equal(1)
        });
    });
});