function storage(input) {

    const storeProducts = {};
    const store = input;

    store.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storeProducts[product]) {
            storeProducts[product] = quantity;
        } else {
            storeProducts[product] += quantity;
        }
    });
    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
