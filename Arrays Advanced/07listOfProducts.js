function listOfProducts(array) {

    let products = array.sort();
    let productsL = products.length;

    for (i = 0; i < productsL; i++) {
        let currentProduct = products[i];
        console.log(`${i + 1}.${currentProduct}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);