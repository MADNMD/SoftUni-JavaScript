function footbalTournament(input) {

    let clubName = input[0];
    let games = Number(input[1]);

    let wins = 0;
    let draw = 0;
    let lost = 0;
    let totalPoints = 0;

    for (let i = 2; i < input.length; i++) {

        let res = input[i];

        switch (res) {
            case 'W': wins++;
                totalPoints += 3
                break;
            case 'D': draw++
                totalPoints += 1
                break;
            case 'L': lost++
                break;
        }
    }
    let percentWins = (wins / games) * 100;

    if (games <= 0) {
        console.log(`${clubName} hasn't played any games during this season.`);
    } else if (games > 0) {
        console.log(`${clubName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lost}`);
        console.log(`Win rate: ${percentWins.toFixed(2)}%`);
    }
}
footbalTournament([
    "Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"]);