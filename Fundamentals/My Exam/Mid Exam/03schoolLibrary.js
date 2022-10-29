function schoolLibrary(input) {

    let bookList = input.shift().split('&');

    let line = input.shift();

    while (line !== 'Done') {

        let [command, ...data] = line.split(' | ')

        if (command === 'Add Book') {
            const book = data[0];
            if (!bookList.includes(book)) {
                bookList.unshift(book);
            }
        } else if (command === 'Take Book') {
            const book = data[0];
            if (bookList.includes(book)) {
                const index = bookList.indexOf(book);
                bookList.splice(index, 1);
            }
        } else if (command === 'Swap Books') {
            let book1 = data[0];
            let book2 = data[1];
            if (bookList.includes(book1) && bookList.includes(book2)) {
                const firstIndex = bookList.indexOf(book1);
                const scondIndex = bookList.indexOf(book2);
                let tempBook = bookList[firstIndex];
                bookList[firstIndex] = bookList[scondIndex];
                bookList[scondIndex] = tempBook;
            }
        } else if (command === 'Insert Book') {
            const book = data[0];
            if (!bookList.includes(book)) {
                bookList.push(book);
            }
        } else if (command === 'Check Book') {
            const index = Number(data[0]);
            if (bookList[index]) {
                console.log(bookList[index]);
            }
        }
        line = input.shift();
    }
    console.log(bookList.join(', '));
}
schoolLibrary([
    "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]);