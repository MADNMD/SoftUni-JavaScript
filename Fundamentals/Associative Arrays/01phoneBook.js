function phoneBook(input) {

    const phoneBook = {};
    const array = input;

    array.forEach(info => {
        let [name, phnone] = info.split(' ');
        phoneBook[name] = phnone;
    });
    for (const person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
