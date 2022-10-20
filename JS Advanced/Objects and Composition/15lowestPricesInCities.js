function lowestPricesInCities(input) {

    const listOfProducts = {};
    const infoArray = [];

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!listOfProducts.hasOwnProperty(product)) {
            listOfProducts[product] = {
                price,
                town,
            }
        } else {
            if (listOfProducts[product].price > price) {
                listOfProducts[product] = {
                    price,
                    town,
                }
            }
        }
    }
    for (let [product, infoProduct] of Object.entries(listOfProducts)) {
        console.log(`${product} -> ${infoProduct.price} (${infoProduct.town})`);
    }
}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sofia | Orange | 3',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);