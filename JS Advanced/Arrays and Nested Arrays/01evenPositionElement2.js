function demo(array) {

    const evenPosition = [];
    array.forEach((number, index) => {
        if (index % 2 === 0) {
            evenPosition.push(number);
        }
    });
    console.log(evenPosition.join(' '));
}
demo(['20', '30', '40', '50', '60'])