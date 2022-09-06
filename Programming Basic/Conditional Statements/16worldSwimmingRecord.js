function worldSwimmingRecord(input) {

    let RecordSec = Number(input[0]);
    let miters = Number(input[1]);
    let timeSec = Number(input[2]);

    let mitersTimeSec = miters * timeSec;
    let zabavqne = Math.floor(miters / 15) * 12.5;
    let allTime = mitersTimeSec + zabavqne;

    if (RecordSec > allTime) {
        console.log(`Yes, he succeeded! The new world record is ${(allTime).toFixed(2)} seconds.`);
    } if (allTime >= RecordSec) {
        console.log(`No, he failed! He was ${(allTime - RecordSec).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord((["10464", "1500", "20"]));