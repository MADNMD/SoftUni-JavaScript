function filmPremiere(input) {

    let film = input[0];
    let menu = input[1];
    let ticketCounter = Number(input[2]);
    let price = 0;

    switch (film) {
        case 'John Wick':
            if (menu === 'Drink') {
                price = 12;
                price *= ticketCounter;
            } else if (menu === 'Popcorn') {
                price = 15;
                price *= ticketCounter;
            } else if (menu === 'Menu') {
                price = 19;
                price *= ticketCounter;
            } break;
        case 'Star Wars':
            if (menu === 'Drink') {
                price = 18;
                price *= ticketCounter;
            } else if (menu === 'Popcorn') {
                price = 25;
                price *= ticketCounter;
            } else if (menu === 'Menu') {
                price = 30;
                price *= ticketCounter;
            } break;
        case 'Jumanji':
            if (menu === 'Drink') {
                price = 9;
                price *= ticketCounter;
            } else if (menu === 'Popcorn') {
                price = 11;
                price *= ticketCounter;
            } else if (menu === 'Menu') {
                price = 14;
                price *= ticketCounter;
            } break;
    }
    if (film === 'Star Wars') {
        if (ticketCounter >= 4) {
            price *= 0.7;
        }
    }
    if (film === 'Jumanji') {
        if (ticketCounter === 2) {
            price *= 0.85;
        }
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["Star Wars", "Popcorn", "4"]);