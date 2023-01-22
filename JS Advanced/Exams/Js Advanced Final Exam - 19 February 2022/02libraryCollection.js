class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {

        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        } else {
            this.books.push({ bookName, bookAuthor, payed: false });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
    }
    payBook(bookName) {
        const book = this.books.find((b) => b.bookName === bookName);

        if (book === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            book.payed = true;
            return `${bookName} has been successfully paid.`;
        }
    }
    removeBook(bookName) {
        const book = this.books.find((b) => b.bookName === bookName);
        const bookIndex = this.books.findIndex((b) => b.bookName === bookName);

        if (book === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        } else {
            this.books.splice(bookIndex, 1);
            return `${bookName} remove from the collection.`;
        }
    }
    getStatistics(bookAuthor) {

        if (!bookAuthor) {
            const emptySlots = this.capacity - this.books.length;
            const libraryResult = [`The book collection has ${emptySlots} empty spots left.`];

            const sortedNameBook = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            sortedNameBook.forEach(book => {
                let pay = 'Has Paid';
                if (book.payed === false) {
                    pay = 'Not Paid';
                }
                libraryResult.push(`${book.bookName} == ${book.bookAuthor} - ${pay}.`);
            });
            return libraryResult.join('\n');
        } else {
            const author = this.books.find((name) => name.bookAuthor === bookAuthor);

            if (author === undefined) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                let pay = 'Has Paid';
                if (author.payed === false) {
                    pay = 'Not Paid';
                }
                return `${author.bookName} == ${author.bookAuthor} - ${pay}.`;
            }
        }
    }
}
// const library = new LibraryCollection(2);
// console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.addBook("Ulysses", "James Joyce"));

// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
