function fishTank(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = lenght * width * height;
    let volumeLiters = volume * 0.001;
    let occupiedSpace = percent / 100;
    let totallLiters = volumeLiters * (1 - occupiedSpace);

    console.log(totallLiters);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);