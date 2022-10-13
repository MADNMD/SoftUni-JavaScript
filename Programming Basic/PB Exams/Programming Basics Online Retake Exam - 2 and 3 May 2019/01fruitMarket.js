function fruitMarket(arg1, arg2, arg3, arg4, arg5) {
    let strawberrysPrice = Number(arg1);
    let sumBananas = Number(arg2);
    let sumOranges = Number(arg3);
    let sumRaspberries = Number(arg4);
    let sumStrawberrys = Number(arg5);

    let tempPriceRaspberries = strawberrysPrice / 2;
    let priceRaspberries = tempPriceRaspberries * sumRaspberries;
    let priceOranges = (tempPriceRaspberries * 0.60) * sumOranges;
    let priceBananas = (tempPriceRaspberries * 0.20) * sumBananas;

    let totalPrice = (sumStrawberrys * strawberrysPrice) + priceBananas + priceOranges + priceRaspberries;
    console.log(totalPrice.toFixed(2))
}
fruitMarket(48, 10, 3.3, 6.5, 1.7);