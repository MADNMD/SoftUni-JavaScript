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

    // let meetingsApp = new Map();
    // for(let line of input){
    //     let[weekDay, name] = line.split(' ');
    //     if(!meetingsApp.has(weekDay)){
    //         console.log(`Scheduled for ${weekDay}`);
    //         meetingsApp.set(weekDay,name);
    //     }else{
    //         console.log(`Conflict on ${weekDay}!`);
    //     }
    // }
    // for(let [key,value] of meetingsApp){
    //     console.log(`${key} -> ${value}`);
    // }