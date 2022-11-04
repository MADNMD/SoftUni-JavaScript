function piccolo(input) {

     const carList = input;
    const cars = {};

    carList.forEach(line => {
        let [inOrOut, carNumber] = line.split(', ');

        if (inOrOut === 'IN') {
            cars[carNumber] = null;
        } else {
            if (!cars[carNumber]) {
                delete cars[carNumber];
            }
        }
    });
    const sortedByCarNumbers = Object.keys(cars);

    if (sortedByCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
        return;
    }
    sortedByCarNumbers.sort();
    sortedByCarNumbers.forEach(car => {
        console.log(car);
    });
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);
