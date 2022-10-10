function footballResults(input) {

    let resultFirstMach = input[0];
    let resultSecondMach = input[1];
    let resultThridMach = input[2];

    let win = 0;
    let lost = 0;
    let draw = 0;

    let machScore1 = resultFirstMach.substring(0, 1);
    let machScore2 = resultFirstMach.substring(2, 3);

    if (machScore1 > machScore2) {
        win++;
    } else if (machScore1 < machScore2) {
        lost++;
    } else {
        draw++;
    }

    machScore1 = resultSecondMach.substring(0, 1);
    machScore2 = resultSecondMach.substring(2, 3);

    if (machScore1 > machScore2) {
        win++;
    } else if (machScore1 < machScore2) {
        lost++;
    } else {
        draw++;
    }

    machScore1 = resultThridMach.substring(0, 1);
    machScore2 = resultThridMach.substring(2, 3);

    if (machScore1 > machScore2) {
        win++;
    } else if (machScore1 < machScore2) {
        lost++;
    } else {
        draw++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);
}
footballResults(["4:2", "0:3", "1:0"]);