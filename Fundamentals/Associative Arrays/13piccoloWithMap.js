function piccolo(input) {

    const carList = input;
    const cars = new Map();

    carList.forEach(line => {
        let [inOrOut, carNumber] = line.split(', ');

        if (inOrOut === 'IN') {
            cars.set(carNumber, null);
        } else {
            if (cars.has(carNumber)) {
                cars.delete(carNumber);
            }
        }
    });
    const sortedByCarNumbers = Array.from(cars.keys());
    sortedByCarNumbers.sort();
    sortedByCarNumbers.forEach(car => {
        console.log(car);
    });
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);