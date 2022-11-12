function garage(input) {

    const garages = {};

    input.forEach(line => {
        let [numberGarage, infoCar] = line.split(' - ');
        numberGarage = Number(numberGarage);

        if (!garages[numberGarage]) {
            garages[numberGarage] = [];
        }
        garages[numberGarage].push(infoCar);

    });
    let result = '';
    const storeGarages = Object.entries(garages);

    storeGarages.forEach(([garage, cars]) => {
        result += `Garage № ${garage}\n`;

        for (let car of cars) {
            while (car.includes(': ')) {
                car = car.replace(': ', ' - ');
            }
            result += `--- ${car}\n`;
        }
    });
    console.log(result);
}
garage([
    '1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);