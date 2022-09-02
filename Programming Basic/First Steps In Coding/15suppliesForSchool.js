function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let litersPrice = liters * 1.20;
    let allPrice = pensPrice + markersPrice + litersPrice;
    let discountPrice = allPrice - (allPrice * (discount / 100));

    console.log(discountPrice);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);