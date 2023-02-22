class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        } else {
            this.wines.push({ wineName, wineType, price, paid: false });
        }
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
    payWineBottle(wineName, price) {

        const findWine = this.wines.find(wine => wine.wineName === wineName);

        if (findWine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (findWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            findWine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }
    openBottle(wineName) {

        const findWine = this.wines.find(wine => wine.wineName === wineName);

        if (findWine === undefined) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }
        if (findWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            const wineIndex = this.wines.findIndex(wine => wine.wineName === wineName);
            this.wines.splice(wineIndex, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }
    cellarRevision(wineType) {

        if (!wineType) {
            const emptySlots = this.space - this.wines.length;
            const wineResult = [`You have space for ${emptySlots} bottles more.`];
            wineResult.push(`You paid ${this.bill}$ for the wine.`);

            const sortedWineName = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            sortedWineName.forEach(wine => {
                let pay = 'Has Paid';
                if (wine.paid === false) {
                    pay = 'Not Paid';
                }
                wineResult.push(`${wine.wineName} > ${wine.wineType} - ${pay}.`);
            });
            return wineResult.join('\n');
        } else {
            const findWineType = this.wines.find(wine => wine.wineType === wineType);

            if (findWineType === undefined) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            } else {
                let pay = 'Has Paid';
                if (findWineType.paid === false) {
                    pay = 'Not Paid';
                }
                return `${findWineType.wineName} > ${findWineType.wineType} - ${pay}.`;
            }
        }
    }
}


// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// Output 1
// You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// Uncaught Error Error: Not enough space in the cellar.

// Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// Output 2
// You bought a Sauvignon Blanc Marlborough for a 120$.
// Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// Input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));


// Output 3
// You drank a bottle of Sauvignon Blanc Marlborough.
// Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.


// Input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));


// Output 4
// You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// Bodegas Godelia Mencía > Rose - Not Paid.

// Input 5
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


// Output 5
// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.
