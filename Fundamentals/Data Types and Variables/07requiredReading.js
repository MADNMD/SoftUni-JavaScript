function requiredReading(book, pages, days) {
    let pagesOfBook = book;
    let pagesRead1hour = pages;
    let daysReadBook = days;
    let totalTimeReadBook = pagesOfBook / pagesRead1hour;
    let requiredHourDay = totalTimeReadBook / daysReadBook;
    console.log(requiredHourDay);
}
requiredReading(212, 20, 2);