function skiTrip(input) {

    let days = Number(input[0]);
    let roomType = input[1];
    let great = input[2];
    let nights = days - 1;
    let roomPrice = 0;

    switch (roomType) {
        case 'room for one person': roomPrice = nights * 18; break;
        case 'apartment': roomPrice = nights * 25;
            if (nights < 10) {
                roomPrice = roomPrice * 0.7;
            } else if (nights <= 15) {
                roomPrice = roomPrice * 0.65;
            } else if (nights > 15) {
                roomPrice = roomPrice * 0.5;
            } break;
        case 'president apartment': roomPrice = nights * 35;
            if (nights < 10) {
                roomPrice = roomPrice * 0.9;
            } else if (nights <= 15) {
                roomPrice = roomPrice * 0.85;
            } else if (nights > 15) {
                roomPrice = roomPrice * 0.8;
            } break;
    }
    if (great === 'positive') {
        roomPrice = roomPrice * 1.25;
    } else if (great === 'negative') {
        roomPrice = roomPrice * 0.9
    }
    console.log(roomPrice.toFixed(2));
}
skiTrip(["14", "apartment", "positive"]);