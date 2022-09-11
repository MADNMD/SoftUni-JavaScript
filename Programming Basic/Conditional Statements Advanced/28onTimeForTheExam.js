function onTimeForTheExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let timeExam = examHour * 60 + examMin;
    let arriveTime = arriveHour * 60 + arriveMin;

    let time = Math.abs(timeExam - arriveTime);
    let h = Math.floor(time / 60);
    let min = time % 60;

    if (timeExam < arriveTime) {
        console.log('Late');
        if (time >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${time} minutes after the start`);
        }
    } else if (arriveTime === timeExam || timeExam - arriveTime <= 30) {
        console.log('On time');
        if (time !== 0) {
            console.log(`${time} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (time >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${time} minutes before the start`);
        }
    }
}
onTimeForTheExam(["9", "30", "9", "50"]);