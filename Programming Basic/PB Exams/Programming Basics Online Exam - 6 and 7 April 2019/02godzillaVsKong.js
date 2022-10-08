function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let StatistsCount = Number(input[1]);
    let outFitPrice = Number(input[2]);

    let decor = budget * 0.1;
    let sumOutFitPrice = StatistsCount * outFitPrice;


    if (StatistsCount > 150) {
        sumOutFitPrice = sumOutFitPrice * 0.9;
    }
    let allFilmPrice = decor + sumOutFitPrice


    if (allFilmPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(allFilmPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - allFilmPrice).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"])