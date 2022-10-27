function computerStore(input) {

    const customer = input.pop();
    let totalPrice = 0;
    let totalPriceAfterDiscount = 0;
    let taxes = 0;

    for(let price of input){
        price = Number(price);

        if(price < 0){
            console.log("Invalid price!");
        }else {
            totalPrice += price;
        }
    }
    taxes = totalPrice * 0.2;
    totalPrice += taxes;

    if(customer === 'special'){
        totalPriceAfterDiscount = totalPrice * 0.9;
    }else{
        totalPriceAfterDiscount = totalPrice;
    }

    if(totalPriceAfterDiscount === 0){
        console.log("Invalid order!");
        return;
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${(totalPrice - taxes).toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPriceAfterDiscount.toFixed(2)}$`);
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);