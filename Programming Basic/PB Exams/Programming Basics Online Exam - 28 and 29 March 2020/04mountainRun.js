function mountainRun(input) {

    let recordSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeSec1m = Number(input[2]);

    let timeToPeak = meters * timeSec1m;
    let delay = Math.floor(meters / 50) * 30;
    let allTimeToPeak = timeToPeak + delay;
    let noTime = allTimeToPeak - recordSec;

    if (allTimeToPeak < recordSec) {
        console.log(`Yes! The new record is ${allTimeToPeak.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${noTime.toFixed(2)} seconds slower.`);
    }
}
mountainRun(["10164", "1400", "25"]);