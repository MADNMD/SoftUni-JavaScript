function energyBooster(input) {

    let fruit = input[0];
    let sizeSet = input[1];
    let counterSet = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    switch (fruit) {
        case 'Watermelon':
            if (sizeSet === 'small') {
                price = 2 * 56;
                totalPrice = price * counterSet;
                break;
            } else if (sizeSet === 'big') {
                price = 5 * 28.70;
                totalPrice = price * counterSet;
                break;
            }
        case 'Mango':
            if (sizeSet === 'small') {
                price = 2 * 36.66;
                totalPrice = price * counterSet;
                break;
            } else if (sizeSet === 'big') {
                price = 5 * 19.60;
                totalPrice = price * counterSet;
                break;
            }
        case 'Pineapple':
            if (sizeSet === 'small') {
                price = 2 * 42.10;
                totalPrice = price * counterSet;
                break;
            } else if (sizeSet === 'big') {
                price = 5 * 24.80;
                totalPrice = price * counterSet;
                break;
            }
        case 'Raspberry':
            if (sizeSet === 'small') {
                price = 2 * 20;
                totalPrice = price * counterSet;
                break;
            } else if (sizeSet === 'big') {
                price = 5 * 15.20;
                totalPrice = price * counterSet;
                break;
            }
    }
    if (totalPrice >= 400 && totalPrice <= 1000) {
        //totalPrice = totalPrice * 0.85;
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        //totalPrice = totalPrice * 0.5;
        totalPrice *= 0.5;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
energyBooster(["Pineapple", "small", "1"]);