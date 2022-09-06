function toyShop(input) {

    let trip = Number(input[0]);
    let puzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allPrice = puzels * 2.60 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    let allToys = puzels + dolls + bears + minions + trucks;

    if (allToys >= 50) {
        (allPrice = allPrice * 0.75);
    }
    let rent = allPrice * 0.1;
    let profit = allPrice - rent;

    if (profit >= trip) {
        console.log(`Yes! ${(profit - trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip - profit).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"]);