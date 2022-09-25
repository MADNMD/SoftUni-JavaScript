function bitcoinMining(input) {

    let day = 0;
    let bitCoin = 0;
    let money = 0;
    let dayOfFirstBitcoin = 0;
    let checkDayFirstBitcoin = 0;
    let costOneGrGold = 67.51;
    let costOneBitcoin = 11949.16;
    let daysInMine = input.length;

    for (let i = 0; i < daysInMine; i++) {
        day++;
        let currenGoldforDay = Number(input[i]);

        if (day % 3 === 0) {
            currenGoldforDay *= 0.7;
        }

        money += currenGoldforDay * costOneGrGold;

        if (money >= costOneBitcoin) {
            if (checkDayFirstBitcoin === 0) {
                dayOfFirstBitcoin = day;
                checkDayFirstBitcoin++;
            }
            let bitCoinPrice = 0;
            let currentQuantityBitcoin = 0;
            currentQuantityBitcoin += money / costOneBitcoin;
            currentQuantityBitcoin = Math.floor(currentQuantityBitcoin);
            bitCoin += currentQuantityBitcoin;
            bitCoinPrice = currentQuantityBitcoin * costOneBitcoin;
            money -= bitCoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitCoin}`);
    if (bitCoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);