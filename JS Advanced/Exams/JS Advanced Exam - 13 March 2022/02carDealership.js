class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {

        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }
    sellCar(model, desiredMileage) {
        const car = this.availableCars.find(c => c.model === model);

        if (car === undefined) {
            throw new Error(`${model} was not found!`);
        }

        const differenceMiliage = car.mileage - desiredMileage;

        if (car.mileage <= desiredMileage) {
            car.price = car.price;
        } else if (differenceMiliage <= 40000) {
            car.price *= 0.95;
        } else if (differenceMiliage > 40000) {
            car.price *= 0.90;
        }
        const carIndex = this.availableCars.findIndex(car => car.model === model);
        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({ model, horsepower: car.horsepower, soldPrice: car.price });
        this.totalIncome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`;
    }
    currentCar() {

        if (this.availableCars.length !== 0) {
            let result = `-Available cars:`;
            this.availableCars.forEach(car => {
                result += `\n---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;
            });
            return result;
        } else {
            return 'There are no available cars';
        }
    }
    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
        result += `\n-${this.soldCars.length} cars sold:`;
        this.soldCars.forEach(car => {
            result += `\n---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`;
        });
        return result;
    }
}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

// New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// New car added: Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// Uncaught Error Error: Invalid input!

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// Toyota Corolla was sold for 3500.00$
// Mercedes C63 was sold for 26100.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// -Available cars:
// ---Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// ---Mercedes C63 - 300 HP - 187000.00 km - 29000.00$
// ---Audi A3 - 120 HP - 240000.00 km - 4900.00$

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));


// SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$