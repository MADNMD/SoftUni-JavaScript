function firstAndLastKNumbers(array) {

    let kNumber = array.shift();
    let firstItems = array.slice(0, kNumber);
    let lastItems = array.slice(-kNumber);
    console.log(firstItems.join(' '));
    console.log(lastItems.join(' '));
}
firstAndLastKNumbers([3,
    6, 7, 8, 9]
);