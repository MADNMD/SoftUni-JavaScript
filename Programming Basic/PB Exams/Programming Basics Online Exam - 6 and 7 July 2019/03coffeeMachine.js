function coffeeMachine(input) {

    let drinks = input[0];
    let shugar = input[1];
    let numberDrinks = Number(input[2]);

    let allPrice = 0;


    switch (drinks) {
        case 'Espresso':
            if (shugar === "Without") {
                allPrice = numberDrinks * 0.90;
                allPrice = allPrice * 0.65;
                if (numberDrinks >= 5) {
                    allPrice = allPrice * 0.75;
                    if (allPrice >= 15) {
                        allPrice = allPrice * 0.80;
                    }
                }
            } else if (shugar === 'Normal') {
                allPrice = numberDrinks * 1;
                if (numberDrinks >= 5) {
                    allPrice = allPrice * 0.75;
                    if (allPrice > 15) {
                        allPrice = allPrice * 0.80;
                    }
                }
            } else if (shugar === 'Extra') {
                allPrice = numberDrinks * 1.20;
                if (numberDrinks >= 5) {
                    allPrice = allPrice * 0.75;
                    if (allPrice > 15) {
                        allPrice = allPrice * 0.80;
                    }
                }
            } break;
        case 'Cappuccino':
            if (shugar === 'Without') {
                allPrice = numberDrinks * 1;
                allPrice = allPrice * 0.65;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            }
            else if (shugar === 'Normal') {
                allPrice = numberDrinks * 1.20;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            }
            else if (shugar === 'Extra') {
                allPrice = numberDrinks * 1.60;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            } break;
        case 'Tea':
            if (shugar === 'Without') {
                allPrice = numberDrinks * 0.50;
                allPrice = allPrice * 0.65;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            }
            else if (shugar === 'Normal') {
                allPrice = numberDrinks * 0.60;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            }
            else if (shugar === 'Extra') {
                allPrice = numberDrinks * 0.70;
                if (allPrice > 15) {
                    allPrice = allPrice * 0.80;
                }
            } break;
    }
    console.log(`You bought ${numberDrinks} cups of ${drinks} for ${allPrice.toFixed(2)} lv.`);
}
coffeeMachine([
    "Espresso",
    "Without",
    "10"]);