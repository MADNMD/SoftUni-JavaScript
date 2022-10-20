function calorieObject(array) {

    const productInfo = array;
    const productInfoL = productInfo.length;
    const products = {};
    let product = '';
    let calories = 0;

    for (let i = 0; i < productInfoL; i++) {
        if (i % 2 === 0) {
            product = productInfo[i];
            products[product] = 0;
        } else if (i % 2 !== 0) {
            calories = Number(productInfo[i]);
            products[product] = calories;
        }
    }
    console.log(products);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);