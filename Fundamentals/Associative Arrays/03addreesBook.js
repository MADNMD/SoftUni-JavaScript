function addressBook(input) {

    let addressPerson = {};
    let sortedByName;
    for (let info of input) {
        let [name, address] = info.split(':');
        addressPerson[name] = address;
        let key = Object.keys(addressPerson);
        sortedByName = key.sort((a, b) => a.localeCompare(b));
    }
    for (let name of sortedByName) {
        console.log(`${name} -> ${addressPerson[name]}`);
    }
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

    //------------------------------------------------------------
// let addressPerson = {};
// for (let info of input) {
//     let [name, address] = info.split(':');
//     addressPerson[name] = address;
// }
// let entires = Object.entries(addressPerson);
// let sorted = entires.sort((a, b) => {
//     let nameA = a[0];
//     let nameB = b[0];
//     return nameA.localeCompare(nameB);
// });
// for (let [name, address] of sorted) {
//     console.log(name, '->', address);
// }

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