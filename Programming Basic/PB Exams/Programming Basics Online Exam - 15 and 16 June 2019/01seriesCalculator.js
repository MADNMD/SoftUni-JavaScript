function seriesCalculator(input) {

    let serialName = input[0];
    let seasons = Number(input[1]);
    let episods = Number(input[2]);
    let timeOfEpisod = Number(input[3]);

    let reklama = timeOfEpisod * 1.20;
    let extraTimeEpisod = seasons * 10;

    let allTime = reklama * episods * seasons + extraTimeEpisod;

    console.log(`Total time needed to watch the ${serialName} series is ${Math.floor(allTime)} minutes.`);
}
seriesCalculator(["Lucifer", "3", "18", "55"]);