const { expect } = require('chai');
const { bookSelection } = require('./03bookSelection');

describe('Testing object methods', () => {
    describe('Test isGenreSuitable method', () => {

        it('Test 1: If is it not suitable for kids', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.be.equal('Books with Thriller genre are not suitable for kids at 11 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it('Test 2: If is suitable', () => {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.equal('Those books are suitable');
        });
    });
    describe('Test isItAffordable method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { bookSelection.isItAffordable('1', 10) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable([], 10) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable({}, 10) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(undefined, 10) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(null, 10) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(10, '1') }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(10, []) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(10, {}) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(10, undefined) }).to.throw(Error);
            expect(() => { bookSelection.isItAffordable(10, null) }).to.throw(Error);
        });

        it('Test 2: Input parameters shoud be numbers', () => {
            expect(bookSelection.isItAffordable(5, 6)).to.be.equal('Book bought. You have 1$ left');
            expect(bookSelection.isItAffordable(5, 5)).to.be.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(5, 4)).to.be.equal('You don\'t have enough money');
        });
    });
    describe('Test suitableTitles method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { bookSelection.suitableTitles([], 1) }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles([], null) }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles([], {}) }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles([], undefined) }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles([], []) }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles(1, '') }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles({}, '') }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles('', '') }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles(undefined, '') }).to.throw(Error);
            expect(() => { bookSelection.suitableTitles(null, '') }).to.throw(Error);
        });

        it('Test 2: When parameters is valid', () => {
            expect(bookSelection.suitableTitles([{ tittle: 'The Da Vinci Code', gener: 'Thriller' }], 'Thriller')).to.deep.equal([]);
        });
    });
});