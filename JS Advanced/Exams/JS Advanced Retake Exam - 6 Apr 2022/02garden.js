class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        } else {
            this.spaceAvailable -= spaceRequired;
            this.plants.push({
                plantName: plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            });
            return `The ${plantName} has been successfully planted in the garden.`;
        }
    }
    ripenPlant(plantName, quantity) {

        const plant = this.plants.find((pl) => pl.plantName === plantName);
        if (this.plants.includes(plant) === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        plant.ripe = true;
        plant.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else if (quantity > 1) {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }
    harvestPlant(plantName) {

        const plant = this.plants.find((pl) => pl.plantName === plantName);
        if (this.plants.includes(plant) === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        const plantIndex = this.plants.indexOf(plant);
        this.plants.splice(plantIndex, 1);

        this.storage.push({
            plantName: plantName,
            quantity: plant.quantity,
        })
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {

        const report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`);

        const plantsName = this.plants.map(plant => plant.plantName);
        plantsName.sort((a, b) => a.localeCompare(b));
        report.push(`Plants in the garden: ${plantsName.join(', ')}`);

        if (this.storage.length === 0) {
            console.log('Plants in storage: The storage is empty.');
        }
        const plantsStorage = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);
        report.push(`Plants in storage: ${plantsStorage.join(', ')}`);

        return report.join('\n');
    }
}
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The cucumber has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// Uncaught Error Error: The orange is already ripe

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The apple has been successfully harvested.
// Uncaught Error Error: There is no olive in the garden.

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)
