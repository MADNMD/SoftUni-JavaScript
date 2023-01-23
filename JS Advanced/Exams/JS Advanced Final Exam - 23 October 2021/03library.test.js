const { expect } = require('chai');
const { library } = require('./03library');

describe('Testing on lobrary object methods', () => {

    describe('Test calcPriceOfBook method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { library.calcPriceOfBook(1, 1) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook([], 1) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook({}, 1) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook(null, 1) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook(undefined, 1) }).to.throw(Error);

            expect(() => { library.calcPriceOfBook('', '') }).to.throw(Error);
            expect(() => { library.calcPriceOfBook('', 1.1) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook('', []) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook('', {}) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook('', null) }).to.throw(Error);
            expect(() => { library.calcPriceOfBook('', undefined) }).to.throw(Error);
        });

        it('Test 2: If input is valid', () => {
            expect(library.calcPriceOfBook('Life Style', 1979)).to.be.equal('Price of Life Style is 10.00');
            expect(library.calcPriceOfBook('Life Style', 1980)).to.be.equal('Price of Life Style is 10.00');
            expect(library.calcPriceOfBook('Life Style', 1981)).to.be.equal('Price of Life Style is 20.00');
        });
    });
    describe('Test findBook method', () => {

        it('Test 1: If the book is in library', () => {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Troy')).to.be.equal('We found the book you want.');
        });

        it('Test 2: If the book  is not in library', () => {
            expect(library.findBook(['Life Style', 'Torronto'], 'Troy')).to.be.equal('The book you are looking for is not here!');
        });

        it('Test 3: If the library array is empty', () => {
            expect(() => { library.findBook([], 'Troy') }).to.throw(Error);
        });
    });
    describe('Test arrangeTheBooks method', () => {

        it('Test 1: If input is invalid', () => {
            expect(() => { library.arrangeTheBooks(1.1) }).to.throw(Error);
            expect(() => { library.arrangeTheBooks(-1) }).to.throw(Error);
            expect(() => { library.arrangeTheBooks('') }).to.throw(Error);
            expect(() => { library.arrangeTheBooks([]) }).to.throw(Error);
            expect(() => { library.arrangeTheBooks(null) }).to.throw(Error);
            expect(() => { library.arrangeTheBooks(undefined) }).to.throw(Error);
        });

        it('Test 2: When is available space in library', () => {
            expect(library.arrangeTheBooks(39)).to.be.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });

        it('Test 3: When is not available space in library', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});