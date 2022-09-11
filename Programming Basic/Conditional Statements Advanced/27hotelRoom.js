function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0;
    let apartamentPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        apartamentPrice = 65;

        if (nights > 14) {
            studioPrice = studioPrice * 0.70;
            apartamentPrice = apartamentPrice * 0.90;
        } else if (nights > 7) {
            studioPrice = studioPrice * 0.95;
        }
    } else if (month === "June" || month === "September") {
        studioPrice = 75.20;
        apartamentPrice = 68.70;
        if (nights > 14) {
            studioPrice = studioPrice * 0.80;
            apartamentPrice = apartamentPrice * 0.90;
        }
    } else if (month === "July" || month === "August") {
        studioPrice = 76;
        apartamentPrice = 77;
        if (nights > 14) {
            studioPrice
            apartamentPrice = apartamentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${(apartamentPrice * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * nights).toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);