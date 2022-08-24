function computerStore(array) {
    let client = array.pop();
    let prices = array.map(Number);
    let pricesL = prices.length;
    let totalPrice = 0;

    for (let i = 0; i < pricesL; i++) {
        let priceOnPart = prices[i];
        if (priceOnPart < 0) {
            console.log("Invalid price!");
            let index = prices.indexOf(priceOnPart);
            prices.splice(index, 1);
            i--;
        }
    }
    let positiveVolues = prices.slice();
    let positiveVoluesL = positiveVolues.length;
    let taxes = 0;
    for (let j = 0; j < positiveVoluesL; j++) {
        let priceOnPart = prices[j];
        totalPrice += priceOnPart;
    }
    taxes = totalPrice * 20 / 100;
    let totalPricePlusTaxes = totalPrice + taxes;
    if (client === 'special') {
        totalPricePlusTaxes *= 0.9;
    }
    if (totalPricePlusTaxes === 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
       Taxes: ${taxes.toFixed(2)}$
       -----------
       Total price: ${totalPricePlusTaxes.toFixed(2)}$`);
    }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);