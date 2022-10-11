function balls(input) {

    let ballsNum = Number(input[0]);
    let totalPoints = 0;
    let points = 0;
    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blacklCounter = 0;
    let otherCounter = 0;

    for (let i = 1; i <= ballsNum; i++) {
        let colour = input[i];

        if (colour === 'red') {
            redCounter++;
            points = 5;
            totalPoints += points
        } else if (colour === 'orange') {
            orangeCounter++;
            points = 10;
            totalPoints += points;
        } else if (colour === 'yellow') {
            yellowCounter++;
            points = 15;
            totalPoints += points;
        } else if (colour === 'white') {
            whiteCounter++;
            points = 20;
            totalPoints += points;
        } else if (colour === 'black') {
            blacklCounter++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            otherCounter++;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherCounter}`);
    console.log(`Divides from black balls: ${blacklCounter}`);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);