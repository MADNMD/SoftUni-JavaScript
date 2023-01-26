class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {

        const uniqueVegetable = [];

        for (let vegetable of vegetables) {

            let [typeVeg, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            const product = this.availableProducts.find(veg => veg.typeVeg === typeVeg);

            if (product === undefined) {
                this.availableProducts.push({ typeVeg, quantity, price });
                uniqueVegetable.push(typeVeg);
            } else {
                product.quantity += quantity;
                if (price > product.price) {
                    product.price = price;
                }
            }
        }
        return `Successfully added ${uniqueVegetable.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let product of selectedProducts) {

            let [typeProduct, quantity] = product.split(' ');
            quantity = Number(quantity);

            let store = this.availableProducts.find(product => product.typeVeg === typeProduct);

            if (store === undefined) {
                throw new Error(`${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                if (quantity > store.quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
            }
            totalPrice += quantity * store.price;
            store.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;

    }
    rottingVegetable(type, quantity) {

        let store = this.availableProducts.find(product => product.typeVeg === type);

        if (store === undefined) {
            throw new Error(`${type} is not available in the store.`);
        } else {
            if (quantity > store.quantity) {
                store.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`;
            } else {
                store.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        }
    }
    revision() {
        let result = `Available vegetables:`;
        let store = this.availableProducts.sort((a, b) => a.price - b.price);
        store.forEach(product => {
            result += `\n${product.typeVeg}-${product.quantity}-$${product.price}`;
        })
        result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return result;
    }
}
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

//  Successfully added Okra, Beans, Celery

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.buyingVegetables(["Okra 1"]));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// Output 2
// Successfully added Okra, Beans, Celery
// Great choice! You must pay the following amount $3.50.
// Great choice! You must pay the following amount $27.65.
// Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// Input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Output 3
// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

// Input 4
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());


// Output 4
// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.