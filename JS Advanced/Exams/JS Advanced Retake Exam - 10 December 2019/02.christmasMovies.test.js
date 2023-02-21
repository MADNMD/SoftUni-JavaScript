const { expect } = require('chai');
const { ChristmasMovies } = require('./02.christmasMovies');

describe('Testing ChristmasMovies class', function () {

    let instance = {};

    beforeEach(() => instance = new ChristmasMovies());

    describe('Test the class constructor', () => {

        it('Test 1: Do they have properties movieCollection watched actros', () => {
            expect(instance.movieCollection).to.not.be.undefined;
            expect(instance.watched).to.not.be.undefined;
            expect(instance.actors).to.not.be.undefined
        });
    });

    describe('Test buyMovie method', () => {

        it('Test 1: If input is valid', () => {
            expect(instance.buyMovie('a', ['b', 'c', 'b'])).to.be.equal('You just got a to your collection in which b, c are taking part!');
        });
        it('Test 2: If it is in the collection', () => {
            instance.buyMovie('a', ['b']);
            expect(() => instance.buyMovie('a', ['b'])).to.throw('You already own a in your collection!');
        });
    });

    describe('Test discardMovie method', () => {

        it('Test 1: If the movie has been watched', () => {
            instance.buyMovie('a', ['b']);
            instance.watched.a = 1;
            expect(instance.discardMovie('a')).to.be.equal('You just threw away a!');
        });
        it('Test 2: If you didn`t buy the movie', () => {
            expect(() => instance.discardMovie('a')).to.throw('a is not at your collection');
        });
        it('Test 3: If movie is bought but now watched', () => {
            instance.buyMovie('a', ['b']);
            expect(() => instance.discardMovie('a', ['b'])).to.throw('a is not watched!');
        });
    });

    describe('Test watchMovie method', () => {

        it('Test 1: The movie is in the collection but not watched', () => {
            instance.buyMovie('a', ['b']);
            instance.watchMovie('a');
            expect(instance.watched.a).to.be.equal(1);
        });
        it('Test 2: If no such movie in your collection!', () => {
            expect(() => instance.watchMovie('a')).to.throw('No such movie in your collection!');
        });
    });

    describe('Test favouriteMovie method', () => {

        it('Test 1: if not watched a movie yet this year!', () => {
            expect(() => instance.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });
        it('Test 2: Favorite movie', () => {
            instance.watched.a = 1;
            instance.watched.b = 2;
            expect(instance.favouriteMovie()).to.be.equal('Your favourite movie is b and you have watched it 2 times!');
        });
    });

    describe('Test mostStarredActors method', () => {

        it('Test 1: If have not watched a movie yet this year!', () => {
            expect(() => instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });
        it('Test 2: How many movies he has been in', () => {
            instance.buyMovie('a', ['b', 'c']);
            instance.buyMovie('m', ['b', 'd']);
            expect(instance.mostStarredActor()).to.be.equal('The most starred actor is b and starred in 2 movies!');
        });
    });
});