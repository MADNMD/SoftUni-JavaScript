function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let rentBoat = 0;

    switch (season) {
        case 'Spring': rentBoat = 3000; break;
        case 'Summer':
        case 'Autumn': rentBoat = 4200; break;
        case 'Winter': rentBoat = 2600; break;
    }
    if (fisherman <= 6) {
        rentBoat = rentBoat * 0.90;
    } else if (fisherman >= 7 && fisherman <= 11) {
        rentBoat = rentBoat * 0.85;
    } else if (fisherman > 12) {
        rentBoat = rentBoat * 0.75;
    } if (fisherman % 2 === 0 && season !== 'Autumn') {
        rentBoat = rentBoat * 0.95;
    } if (budget >= rentBoat) {
        console.log(`Yes! You have ${(budget - rentBoat).toFixed(2)} leva left.`);
    } else {
        (rentBoat >= budget)
        console.log(`Not enough money! You need ${(rentBoat - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"]);