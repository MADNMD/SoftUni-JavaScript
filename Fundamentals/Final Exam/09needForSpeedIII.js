function needForSpeedIII(input) {

    let carNumber = input.shift();
    let carInfo = {};
    const maxMiliage = 100000;
    const minMiliage = 10000;
    const tankCapacity = 75;

    for (let i = 0; i < carNumber; i++) {
        let car = input.shift();
        let [model, miliage, fuel] = car.split('|');
        miliage = Number(miliage);
        fuel = Number(fuel);
        carInfo[model] = { miliage, fuel };
    }
    let line = input.shift();
    while (line !== 'Stop') {
        let [command, ...data] = line.split(' : ');
        if (command === 'Drive') {
            let model = data[0];
            let distance = Number(data[1]);
            let fuel = Number(data[2]);
            let fuelAvailble = carInfo[model].fuel;
            let miliage = carInfo[model].miliage;
            if (fuel > fuelAvailble) {
                console.log("Not enough fuel to make that ride");
            } else {
                let newMiliage = miliage + distance;
                let restFuel = fuelAvailble - fuel;
                carInfo[model].fuel = restFuel;
                carInfo[model].miliage = newMiliage;
                console.log(`${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (carInfo[model].miliage > maxMiliage) {
                delete carInfo[model];
                console.log(`Time to sell the ${model}!`);
            }
        } else if (command === 'Refuel') {
            let model = data[0];
            let fuel = Number(data[1]);
            let fuelAvailble = carInfo[model].fuel;
            if (fuelAvailble + fuel >= tankCapacity) {
                console.log(`${model} refueled with ${tankCapacity - fuelAvailble} liters`);
                fuelAvailble = tankCapacity;
            } else {
                fuelAvailble += fuel;
                console.log(`${model} refueled with ${fuel} liters`);
            }
            carInfo[model].fuel = fuelAvailble;
        } else if (command === 'Revert') {
            let model = data[0];
            let kilomiters = Number(data[1]);
            let currentMiliage = carInfo[model].miliage;
            let newMiliage = currentMiliage - kilomiters;
            if (newMiliage < minMiliage) {
                newMiliage = minMiliage;
            } else {
                console.log(`${model} mileage decreased by ${kilomiters} kilometers`);
            }
            carInfo[model].miliage = newMiliage;
        }
        line = input.shift();
    }
    let carsArr = Object.entries(carInfo);
    for (let car of carsArr) {
        console.log(`${car[0]} -> Mileage: ${car[1].miliage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    }
}
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
    'Stop'
]
);