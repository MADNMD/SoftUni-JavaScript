function repainting(input) {

    let plastic = Number(input[0]);
    let paint = Number(input[1]);
    let liters = Number(input[2]);
    let hours = Number(input[3]);
    let plasticPrice = (plastic + 2) * 1.5;
    let paintPrice = (paint + (paint * 0.10)) * 14.5;
    let litersPrice = liters * 5;
    let bag = 0.4;
    let materialPrice = plasticPrice + paintPrice + litersPrice + bag;
    let hoursPrice = ((materialPrice * 0.3) * hours);
    let totallPrice = materialPrice + hoursPrice;

    console.log(totallPrice);
}
repainting(["10 ", "11 ", "4 ", "8 "]);