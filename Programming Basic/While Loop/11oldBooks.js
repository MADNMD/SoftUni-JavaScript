function oldBooks(input) {

    let aniBook = input[0];
    let index = 1;
    let books = input[index];
    index++;
    let bookIsFound = false;

    while (books !== 'No More Books') {
        if (books === aniBook) {
            bookIsFound = true;
            break;
        }
        books = input[index];
        index++;
    }
    if (books !== aniBook) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 2} books.`)
    } else {
        console.log(`You checked ${index - 2} books and found it.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);