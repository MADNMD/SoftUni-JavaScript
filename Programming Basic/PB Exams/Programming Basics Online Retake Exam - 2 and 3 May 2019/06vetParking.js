function vetParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let dayCounter = 0;
    let totalPrice = 0;

    for (let i = 1; i <= days; i++) {
        dayCounter++;
        let price = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 === 0 && j % 2 !== 0) {
                price += 2.5;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price += 1.25;
            } else {
                price += 1;
            }
        }
        totalPrice += price;
        console.log(`Day: ${dayCounter} - ${price.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["5", "2"]);