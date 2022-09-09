function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let number = Number(input[2]);

    let price = 0;

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        switch (fruit) {
            case 'banana': price = number * 2.50;
                console.log(price.toFixed(2)); break;
            case 'apple': price = number * 1.20;
                console.log(price.toFixed(2)); break;
            case 'orange': price = number * 0.85;
                console.log(price.toFixed(2)); break;
            case 'grapefruit': price = number * 1.45;
                console.log(price.toFixed(2)); break;
            case 'kiwi': price = number * 2.70;
                console.log(price.toFixed(2)); break;
            case 'pineapple': price = number * 5.50;
                console.log(price.toFixed(2)); break;
            case 'grapes': price = number * 3.85;
                console.log(price.toFixed(2)); break;
            default:
                console.log('error');
        }
    }
    else if (day == 'Saturday' || day == 'Sunday') {
        switch (fruit) {
            case 'banana': price = number * 2.70;
                console.log(price.toFixed(2)); break;
            case 'apple': price = number * 1.25;
                console.log(price.toFixed(2)); break;
            case 'orange': price = number * 0.90;
                console.log(price.toFixed(2)); break;
            case 'grapefruit': price = number * 1.60;
                console.log(price.toFixed(2)); break;
            case 'kiwi': price = number * 3.00;
                console.log(price.toFixed(2)); break;
            case 'pineapple': price = number * 5.60;
                console.log(price.toFixed(2)); break;
            case 'grapes': price = number * 4.20;
                console.log(price.toFixed(2)); break;
            default:
                console.log('error');
        }
    } else {
        console.log('error');
    }
}
fruitShop(["apple", "Tuesday", "2"]);