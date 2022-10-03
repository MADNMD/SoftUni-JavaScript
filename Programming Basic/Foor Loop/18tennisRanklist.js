function tennisRanklist(input) {

    let tournamentsCounter = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = startingPoints;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        let stage = input[i];
        switch (stage) {
            case 'W': points += 2000;
                wins++
                break;
            case 'F': points += 1200; break;
            case 'SF': points += 720; break;
        }
    }
    let totalPoints = (points - startingPoints) / tournamentsCounter;
    let totalPercent = (wins / tournamentsCounter) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(totalPoints)}`);
    console.log(`${(totalPercent).toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);