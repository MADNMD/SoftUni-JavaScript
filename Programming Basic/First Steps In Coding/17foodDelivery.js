function exe(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let chickenPriceMenu = chickenMenu * 10.35;
    let fishPriceMenu = fishMenu * 12.4;
    let veganPriceMenu = veganMenu * 8.15;
    let allPriceMenu = chickenPriceMenu + fishPriceMenu + veganPriceMenu;
    let desert = allPriceMenu * 0.20;
    let delivery = 2.50;
    let totalPrice = allPriceMenu + desert + delivery;

    console.log(totalPrice);
}
foodDelivery(["2 ", "4 ", "3 "]);