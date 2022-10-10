function gameNumberWars(input) {

    let nameFirstPlayer = input[0];
    let nameSecondPlayer = input[1];

    let index = 2;
    let command = input[index];
    let pointsFirstPlayer = 0;
    let pointsSecondPlayer = 0;

    while (command !== 'End of game') {
        let firstCard = Number(input[index++]);
        let secondCard = Number(input[index]);

        if (firstCard > secondCard) {
            pointsFirstPlayer += firstCard - secondCard;
        } else if (secondCard > firstCard) {
            pointsSecondPlayer += secondCard - firstCard;
        } else if (firstCard === secondCard) {
            console.log("Number wars!");
            index++;
            firstCard = Number(input[index++]);
            secondCard = Number(input[index]);
            if (firstCard > secondCard) {
                console.log(`${nameFirstPlayer} is winner with ${pointsFirstPlayer} points`);
            } else if (secondCard > firstCard) {
                console.log(`${nameSecondPlayer} is winner with ${pointsSecondPlayer} points`);
            } break;
        }
        index++;
        command = input[index];
    }
    if (command === 'End of game') {
        console.log(`${nameFirstPlayer} has ${pointsFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${pointsSecondPlayer} points`);
    }
}
gameNumberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);