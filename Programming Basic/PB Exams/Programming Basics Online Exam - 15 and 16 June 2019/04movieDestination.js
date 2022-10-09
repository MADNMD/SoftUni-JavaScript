function movieDestination(input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = input[3];
    let allSum = 0;

    switch (destination) {
        case 'Dubai':
            if (season === 'Winter') {
                allSum = days * 45000;
                allSum *= 0.70;
                break;
            } else if (season === 'Summer') {
                allSum = days * 40000;
                allSum *= 0.70;
                break;
            }
        case 'Sofia':
            if (season === 'Winter') {
                allSum = days * 17000;
                allSum *= 1.25;
                break;
            } else if (season === 'Summer') {
                allSum = days * 12500;
                allSum *= 1.25;
                break;
            }
        case 'London':
            if (season === 'Winter') {
                allSum = days * 24000;
                break;
            } else if (season === 'Summer') {
                allSum = days * 20250;
                break;
            }
    }
    if (budget >= allSum) {
        console.log(`The budget for the movie is enough! We have ${(budget - allSum).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${Math.abs(allSum - budget).toFixed(2)} leva more!`);
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);