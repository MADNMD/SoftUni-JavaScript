function train(input) {

    let passengersInWagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        let currentCommand = input[i].split(' ');
        let firstElCom = currentCommand[0];
        let secondElCom = currentCommand[1];

        if (currentCommand.length === 2 && firstElCom === 'Add') {
            passengersInWagons.push(secondElCom);
        } else {
            let passengers = Number(currentCommand[0]);
            for (let j = 0; j < passengersInWagons.length; j++) {
                if (passengers + passengersInWagons[j] <= maxCapacity) {
                    passengersInWagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(passengersInWagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);