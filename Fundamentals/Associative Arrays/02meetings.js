function meetings(input) {

    let meetingApp = {};
    for (let lines of input) {
        let [weekDay, name] = lines.split(' ');
        if (meetingApp.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meetingApp[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    for (let key in meetingApp) {
        console.log(`${key} -> ${meetingApp[key]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
