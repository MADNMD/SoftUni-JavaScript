function lunchBreak(input) {

    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let rest = Number(input[2]);

    let lunchTime = rest * 1 / 8;
    let restTime = rest * 1 / 4;
    let allTime = rest - restTime - lunchTime;

    if (allTime >= episodeTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(allTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - allTime)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones", "60", "96"]);