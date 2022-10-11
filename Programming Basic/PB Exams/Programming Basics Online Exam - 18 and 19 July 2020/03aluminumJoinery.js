function aluminumJoinery(input) {

    let numJoinery = Number(input[0]);
    let typeJoinery = input[1];
    let delivery = input[2];
    let price = 0;
    let allPrice = 0;

    switch (typeJoinery) {
        case '90X130':
            price = 110;
            if (numJoinery > 10 && numJoinery < 30) {
                allPrice = numJoinery * price;
                break;
            } else if (numJoinery >= 30 && numJoinery < 60) {
                allPrice = numJoinery * price;
                allPrice *= 0.95;
                break;
            } else if (numJoinery > 60) {
                allPrice = numJoinery * price;
                allPrice *= 0.92;
                break;
            }
        case '100X150':
            price = 140;
            if (numJoinery > 10 && numJoinery < 40) {
                allPrice = numJoinery * price;
                break;
            } else if (numJoinery >= 40 && numJoinery < 80) {
                allPrice = numJoinery * price;
                allPrice *= 0.94;
                break;
            } else if (numJoinery > 80) {
                allPrice = numJoinery * price;
                allPrice *= 0.90;
                break;
            }
        case '130X180':
            price = 190;
            if (numJoinery > 10 && numJoinery < 20) {
                allPrice = numJoinery * price;
                break;
            } else if (numJoinery >= 20 && numJoinery < 50) {
                allPrice = numJoinery * price;
                allPrice *= 0.93;
                break;
            } else if (numJoinery > 50) {
                allPrice = numJoinery * price;
                allPrice *= 0.88;
                break;
            }
        case '200X300':
            price = 250;
            if (numJoinery > 10 && numJoinery < 25) {
                allPrice = numJoinery * price;
                break;
            } else if (numJoinery >= 25 && numJoinery < 50) {
                allPrice = numJoinery * price;
                allPrice *= 0.91;
                break;
            } else if (numJoinery > 50) {
                allPrice = numJoinery * price;
                allPrice *= 0.86;
                break;
            }
    }
    if (delivery === 'With delivery') {
        allPrice += 60;
    }
    if (numJoinery > 99) {
        allPrice *= 0.96;
    }
    if (numJoinery < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${allPrice.toFixed(2)} BGN`);
    }
}
aluminumJoinery(["40", "90X130", "Without delivery"]);