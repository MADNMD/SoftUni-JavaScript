function easterBaker(input) {

    let flourPrice = Number(input[0]);
    let flourKG = Number(input[1]);
    let sugarKG = Number(input[2]);
    let eggs = Number(input[3]);
    let packetMaq = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggsPrice = flourPrice * 1.10;
    let maqPrice = sugarPrice * 0.20;

    let sumFlour = flourPrice * flourKG;
    let sumSugar = sugarPrice * sugarKG;
    let sumEggs = eggsPrice * eggs;
    let sumMaq = maqPrice * packetMaq;

    let allPrice = sumFlour + sumSugar + sumEggs + sumMaq;

    console.log(allPrice.toFixed(2));
}
easterBaker(["50", "10", "3.5", "6", "1"]);