function storeProvision(currentStore, deliveryProduct) {

    let storeProduct = {};
    let currentStoreL = currentStore.length;
    let deliveryProductL = deliveryProduct.length;

    for (let i = 0; i < currentStoreL; i += 2) {
        let product = currentStore[i];
        storeProduct[product] = Number(currentStore[i + 1]);
    }
    for (let i = 0; i < deliveryProductL; i += 2) {
        let product = deliveryProduct[i];

        if (!storeProduct.hasOwnProperty(product)) {
            storeProduct[product] = 0;
        }
        storeProduct[product] += Number(deliveryProduct[i + 1]);
    }
    for (let product in storeProduct) {
        console.log(`${product} -> ${storeProduct[product]}`);
    }
    // let entries = Object.entries(storeProduct).sort((a,b) => a[1] - b[1]);
    // entries.forEach(el => console.log(el));
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);