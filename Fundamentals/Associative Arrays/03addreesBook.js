function addressBook(input) {

   const bookWithAddrees = {};
    const array = input;

    array.forEach(line => {
        let [name, addrees] = line.split(':');
        bookWithAddrees[name] = addrees;
    });
    const sortedByName = Object.keys(bookWithAddrees);
    sortedByName.sort((a, b) => a.localeCompare(b));

    sortedByName.forEach(name => {
        console.log(`${name} -> ${bookWithAddrees[name]}`);
    });
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
