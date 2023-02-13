const { expect } = require('chai');
const { cinema } = require('./03.cinema');

describe('Testing object cinema and his methods', () => {

    describe('Test showMovies method', () => {

        it('Test 1: If array is empty', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it('Test 2: If array has parametes', () => {
            expect(cinema.showMovies(['a', 'b', 'c'])).to.be.equal('a, b, c');
        });
    });
    describe('Test ticketPrice method', () => {

        it('Test 1: Check Premiere ticket price', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12);
        });
        it('Test 2: Check Normal ticket price', () => {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.5);
        });
        it('Test 3: Check Discount ticket price', () => {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });
        it('Test 4: Invalid input', () => {
            expect(() => cinema.ticketPrice('a')).to.throw(Error);
        });
    });
    describe('Test swapSeatsInHall method', () => {

        it('Test 1: If first paramete is not a number', () => {
            expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.1, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall([], 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall({}, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 1)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Test 2: If second paramete is not a number', () => {
            expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,'1')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1.1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, [])).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, {})).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, null)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, undefined)).to.be.equal('Unsuccessful change of seats in the hall.');
        });
        it('Test 3: When both parameters are valid', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 1)).to.be.equal('Successful change of seats in the hall.');
        });
    });
});