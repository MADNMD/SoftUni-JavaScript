function godzillaVsKong(input) {

    let bugetFilm = Number(input[0]);
    let statists = Number(input[1]);
    let outFit = Number(input[2]);

    let decorPrice = bugetFilm * 0.1;
    let outFitPrice = statists * outFit;

    if (statists > 150) {
        outFitPrice = outFitPrice * 0.9;
    }
    let allPriceFilm = decorPrice + outFitPrice;

    if (bugetFilm >= allPriceFilm) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(bugetFilm - allPriceFilm).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(allPriceFilm - bugetFilm).toFixed(2)} leva more.`)
    }
}
godzillaVsKong(["20000", "120", "55.5"]);