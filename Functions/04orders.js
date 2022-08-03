function orders(produc, quantity) {

    let coffeeSum = () => quantity * 1.5;
    let waterSum = () => quantity * 1;
    let cokeSum = () => quantity * 1.4;
    let snacksSum = () => quantity * 2;
    let finalPrice = 0;

    switch (produc) {
        case 'water':
            finalPrice = waterSum(); break;
        case 'coffee':
            finalPrice = coffeeSum(); break;
        case 'coke':
            finalPrice = cokeSum(); break;
        case 'snacks':
            finalPrice = snacksSum(); break;
    }
    console.log(finalPrice.toFixed(2));
}
orders("water", 5);