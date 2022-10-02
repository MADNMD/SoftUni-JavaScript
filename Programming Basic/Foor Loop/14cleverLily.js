function demo(input) {

    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savedMoney = 0;
    let stollenMoney = 0;
    let addMoney = 10;
    let toyCounter = 0;

    for (let index = 1; index <= lilisAge; index++) {

        if (index % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stollenMoney++
        } else {
            toyCounter++
        }
    }
    let toy = toyCounter * toyPrice;
    let allMoney = (savedMoney + toy) - stollenMoney;

    if (allMoney >= washingMachinePrice) {
        console.log(`Yes! ${(allMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - allMoney).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);