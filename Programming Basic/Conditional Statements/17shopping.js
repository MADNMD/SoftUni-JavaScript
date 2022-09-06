function shopping(input) {

    let buget = Number(input[0]);
    let videoCard = Number(input[1]);
    let procesori = Number(input[2]);
    let Ram = Number(input[3]);

    let sumVideoCard = videoCard * 250;
    let sumProcesori = sumVideoCard * 0.35 * procesori;
    let sumRam = sumVideoCard * 0.1 * Ram;
    let allPrice = sumVideoCard + sumProcesori + sumRam;

    if (videoCard > procesori) {
        allPrice = allPrice * 0.85;
    }
    if (allPrice <= buget) {
        console.log(`You have ${(buget - allPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(allPrice - buget).toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);