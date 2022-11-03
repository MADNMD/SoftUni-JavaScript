function phoneBook(input) {

    const phoneBook = new Map();
    const array = input;

    array.forEach(info => {
        let [name, phnone] = info.split(' ');
        phoneBook.set(name, phnone);
    });
    for (let [name, phone] of phoneBook.entries()) {
        console.log(`${name} -> ${phone}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);