function phoneBook(input) {

    let phoneBook = {};
    for (let nameAndPhone of input) {
        let [name, phone] = nameAndPhone.split(' ');
        phoneBook[name] = phone;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);


    // let phoneBook = new Map();
    // for (let info of input) {
    //     let [name, phone] = info.split(' ');
    //     phoneBook.set(name, phone);
    // }
    // for (let [key, value] of phoneBook) {
    //     console.log(key, '->', value);
    // }