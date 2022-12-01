function needForSpeedIII(input) {

    const arrayInput = input.slice();
    numberOfCars = Number(arrayInput.shift());
    const carsInfo = {};
    const maxMiliage = 100000;
    const minMiliage = 10000;
    const maxFuelL = 75;

    while (numberOfCars > 0) {
        let [carModel, miliage, fuel] = arrayInput.shift().split('|');

        carsInfo[carModel] = {
            miliage: Number(miliage),
            fuel: Number(fuel),
        }
        numberOfCars--;
    }


    let line = arrayInput.shift();

    while (line !== 'Stop') {

        let [command, ...data] = line.split(' : ');

        if (command === 'Drive') {
            const car = data[0];
            const distance = Number(data[1]);
            const fuel = Number(data[2]);

            if (fuel > carsInfo[car].fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                carsInfo[car].miliage += distance;
                carsInfo[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }

            if (carsInfo[car].miliage >= maxMiliage) {
                delete carsInfo[car];
                console.log(`Time to sell the ${car}!`);
            }

        } else if (command === 'Refuel') {
            const car = data[0];
            let fuel = Number(data[1]);
            let currentFuel = carsInfo[car].fuel;
            let neededFuel = currentFuel + fuel;

            if (neededFuel >= maxFuelL) {
                console.log(`${car} refueled with ${maxFuelL - currentFuel} liters`);
                carsInfo[car].fuel = maxFuelL;
            } else {
                carsInfo[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        } else if (command === 'Revert') {
            const car = data[0];
            const kilometers = Number(data[1]);

            carsInfo[car].miliage -= kilometers;

            if (carsInfo[car].miliage < minMiliage) {
                carsInfo[car].miliage = minMiliage;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
        line = arrayInput.shift();
    }

    for (let car in carsInfo) {
        console.log(`${car} -> Mileage: ${carsInfo[car].miliage} kms, Fuel in the tank: ${carsInfo[car].fuel} lt.`);
    }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);

// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop']);