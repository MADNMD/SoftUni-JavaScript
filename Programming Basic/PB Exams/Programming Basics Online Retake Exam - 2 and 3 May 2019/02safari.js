function safari(input) {
    let budget = Number(input[0]);
    let littersBenzin = Number(input[1]);
    let day = input[2];

    let allPriceBenzin = littersBenzin * 2.10;
    allPriceBenzin += 100;

    if (day === 'Sunday') {
        allPriceBenzin *= 0.8;
    } else if (day === 'Saturday') {
        allPriceBenzin *= 0.9;
    }

    if (budget >= allPriceBenzin) {
        console.log(`Safari time! Money left: ${(budget - allPriceBenzin).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(allPriceBenzin - budget).toFixed(2)} lv.`);
    }
}
safari(["1000", "10", "Sunday"]);