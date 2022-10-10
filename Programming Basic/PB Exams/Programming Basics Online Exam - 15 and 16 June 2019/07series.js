function series(input) {

    let budget = Number(input[0]);
    let numSeriali = Number(input[1]);
    let inputL = input.length;

    let price = 0;

    for (let i = 2; i < inputL; i++) {
        let serial = input[i++];
        let priceSerial = Number(input[i]);

        if (serial === 'Thrones') {
            price += priceSerial * 0.5;
        } else if (serial === 'Lucifer') {
            price += priceSerial * 0.6;
        } else if (serial === 'Protector') {
            price += priceSerial * 0.7;
        } else if (serial === 'TotalDrama') {
            price += priceSerial * 0.8;
        } else if (serial === 'Area') {
            price += priceSerial * 0.9;
        } else if (serial !== 'Others') {
            price += priceSerial
        }
    }
    if (budget >= price) {
        console.log(`You bought all the series and left with ${(budget - price).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(price - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);