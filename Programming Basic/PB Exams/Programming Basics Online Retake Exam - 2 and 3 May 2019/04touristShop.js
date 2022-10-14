function touristShop(input) {

    let budget = Number(input[0]);

    let index = 1;
    let command = input[index];
    let purchaseCounter = 0;
    let allProductPrice = 0;

    while (command !== 'Stop') {
        let product = input[index++];
        let productPrice = Number(input[index]);
        purchaseCounter++;

        if (purchaseCounter % 3 === 0) {
            productPrice /= 2;
        }
        if (productPrice > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }

        budget -= productPrice;
        allProductPrice += productPrice

        index++;
        command = input[index];

    }
    if (command === 'Stop') {
        console.log(`You bought ${purchaseCounter} products for ${allProductPrice.toFixed(2)} leva.`);
    }
}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"])