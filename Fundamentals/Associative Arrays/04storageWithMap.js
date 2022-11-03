function storage(input) {

    const storeProducts = new Map();
    const store = input;

    store.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storeProducts.has(product)) {
            storeProducts.set(product, quantity);
        } else {
            const currentQuantity = storeProducts.get(product);
            quantity += currentQuantity;
            storeProducts.set(product, quantity);
        }
    });
    for (let [key, value] of storeProducts) {
        console.log(`${key} -> ${value}`);
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);