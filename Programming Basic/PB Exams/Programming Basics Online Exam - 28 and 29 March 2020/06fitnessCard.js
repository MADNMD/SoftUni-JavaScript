function fitnessCard(input) {

    let sum = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let typeSport = input[3];
    let card = 0;
    let totalPrice = 0;

    switch (typeSport) {
        case 'Gym':
            if (gender === 'm') {
                card = 42;
                break;
            } else if (gender === 'f') {
                card = 35;
                break;
            }
        case 'Boxing':
            if (gender === 'm') {
                card = 41;
                break;
            } else if (gender === 'f') {
                card = 37;
                break;
            }
        case 'Yoga':
            if (gender === 'm') {
                card = 45;
                break;
            } else if (gender === 'f') {
                card = 42;
                break;
            }
        case 'Zumba':
            if (gender === 'm') {
                card = 34;
                break;
            } else if (gender === 'f') {
                card = 31;
                break;
            }
        case 'Dances':
            if (gender === 'm') {
                card = 51;
                break;
            } else if (gender === 'f') {
                card = 53;
                break;
            }
        case 'Pilates':
            if (gender === 'm') {
                card = 39;
                break;
            } else if (gender === 'f') {
                break;
            }
    }
    if (age <= 19) {
        card *= 0.8;
    }
    if (card <= sum) {
        console.log(`You purchased a 1 month pass for ${typeSport}.`);
    } else {
        console.log(`You don't have enough money! You need ${"$" + (card - sum).toFixed(2)} more.`);
    }
}
fitnessCard(["10", "m", "50", "Pilates"]);