function familyTrip(input) {
    let budget = Number(input[0]);
    let numNigths = Number(input[1]);
    let priceNigth = Number(input[2]);
    let percentCosts = Number(input[3]);

    if (numNigths > 7) {
        priceNigth *= 0.95;
    }
    let allPriceForNigths = numNigths * priceNigth;
    let percent = budget * (percentCosts / 100);

    allPriceForNigths += percent;

    if (budget >= allPriceForNigths) {
        console.log(`Ivanovi will be left with ${(budget - allPriceForNigths).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${Math.abs(allPriceForNigths - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip([
    "800.50",
    "8",
    "100",
    "2"]);