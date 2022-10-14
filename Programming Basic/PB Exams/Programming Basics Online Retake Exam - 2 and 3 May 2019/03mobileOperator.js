function mobileOperator(input) {

    let contractPeriod = input[0];
    let typeContract = input[1];
    let mobileInternet = input[2];
    let payMounth = Number(input[3]);
    let price = 0;

    switch (typeContract) {
        case 'Small':
            if (contractPeriod === 'one') {
                price = 9.98;
            } else if (contractPeriod === 'two') {
                price = 8.58;
            }
            break;
        case 'Middle':
            if (contractPeriod === 'one') {
                price = 18.99;
            } else if (contractPeriod === 'two') {
                price = 17.09;
            }
            break;
        case 'Large':
            if (contractPeriod === 'one') {
                price = 25.98;
            } else if (contractPeriod === 'two') {
                price = 23.59;
            }
            break;
        case 'ExtraLarge':
            if (contractPeriod === 'one') {
                price = 35.99;
            } else if (contractPeriod === 'two') {
                price = 31.79;
            }
            break;
    }
    if (mobileInternet === 'yes') {
        if (price <= 10) {
            price += 5.50;
        } else if (price <= 30) {
            price += 4.35;
        } else if (price > 30) {
            price += 3.85;
        }
    }

    if (contractPeriod === 'two') {
        price = price * 0.9625;
    }

    let totalPrice = price * payMounth;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}
mobileOperator(["one", "Small", "yes", "10"]);