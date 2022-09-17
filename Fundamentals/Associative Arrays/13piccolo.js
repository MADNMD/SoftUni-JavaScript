function piccolo(input) {

    let carsInTheParking = {};
    for (let line of input) {
        let commands = line.split(', ')[0];
        let carNumber = line.split(', ')[1];
        if (commands === 'IN') {
            carsInTheParking[carNumber] = null;
        } else if (commands === 'OUT') {
            delete carsInTheParking[carNumber];
        }
    }
    let key = Object.keys(carsInTheParking);
    if (key.length === 0) {
        console.log('Parking Lot is Empty');
    }
    let sortedCarNumbers = key.sort();
    for (let carNumber of sortedCarNumbers) {
        console.log(carNumber);
    }
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);