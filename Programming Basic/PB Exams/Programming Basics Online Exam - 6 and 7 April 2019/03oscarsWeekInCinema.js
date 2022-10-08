function oscarsWeekInCinema(input) {

    let filmName = input[0];
    let hall = input[1];
    let tickets = Number(input[2]);

    let allPrice = 0;

    switch (hall) {
        case 'normal':
            if (filmName === 'A Star Is Born') {
                allPrice = tickets * 7.5;
            } else if (filmName === 'Bohemian Rhapsody') {
                allPrice = tickets * 7.35;
            } else if (filmName === 'Green Book') {
                allPrice = tickets * 8.15;
            } else if (filmName === 'The Favourite') {
                allPrice = tickets * 8.75;
            } break;
        case 'luxury':
            if (filmName === 'A Star Is Born') {
                allPrice = tickets * 10.5;
            } else if (filmName === 'Bohemian Rhapsody') {
                allPrice = tickets * 9.45;
            } else if (filmName === 'Green Book') {
                allPrice = tickets * 10.25;
            } else if (filmName === 'The Favourite') {
                allPrice = tickets * 11.55;
            } break;
        case 'ultra luxury':
            if (filmName === 'A Star Is Born') {
                allPrice = tickets * 13.5;
            } else if (filmName === 'Bohemian Rhapsody') {
                allPrice = tickets * 12.75;
            } else if (filmName === 'Green Book') {
                allPrice = tickets * 13.25;
            } else if (filmName === 'The Favourite') {
                allPrice = tickets * 13.95;
            } break;
    }
    console.log(`${filmName} -> ${allPrice.toFixed(2)} lv.`);

}
oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);