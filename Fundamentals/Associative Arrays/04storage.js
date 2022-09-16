function storage(input) {

    let storage = new Map();

    for (let info of input) {
        let tokens = info.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + quantity;
            storage.set(product, newQuantity);
        }
    }
    for (let [key, value] of storage) {
        console.log(key, '->', value);
    }
    // let key = storage.keys();
    // for (let product of key) {
    //     console.log(`${product} -> ${storage.get(product)}`);
    // }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);


    // let storage = {};

    // for (let token of input) {
    //     let [product, quantity] = token.split(' ');
    //     if (!storage.hasOwnProperty(product)) {
    //         storage[product] = Number(quantity);
    //     } else {
    //         storage[product] += Number(quantity);
    //     }
    // }
    // for(let product in storage){
    //     console.log(`${product} -> ${storage[product]}`);
    // }