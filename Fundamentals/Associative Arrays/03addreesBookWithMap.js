function addreesBook(input) {

    const bookWithAddrees = new Map();
    const array = input;

    array.forEach(info => {
        let [name, addrees] = info.split(':');
        bookWithAddrees.set(name, addrees);
    });
    const sortedByName = Array.from(bookWithAddrees.keys());
    sortedByName.sort((a, b) => a.localeCompare(b));


    sortedByName.forEach(name => {
        console.log(`${name} -> ${bookWithAddrees.get(name)}`);
    });
}
addreesBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);

    //--------------------------------------------------------
    // let addressBook = new Map();
    // let sortedByName;
    // for (let line of input) {
    //     let [name, address] = line.split(':');
    //     addressBook.set(name, address);
    //     sortedByName = new Map([...addressBook].sort());
    // }
    // for (let [key, value] of sortedByName) {
    //     console.log(key, '->', value);
    // }

    //---------------------------------------------------------
    // let addressBook = new Map();
    // for (let line of input) {
    //     let [name, address] = line.split(':');
    //     addressBook.set(name, address);
    // }
    // let array = Array.from(addressBook);
    // let sortedByName = array.sort((a, b) => a[0].localeCompare(b[0]));
    // for (let [name, address] of sortedByName) {
    //     console.log(name, '->', address);
    // }