function meetings(input) {

    const meetings = new Map();
    const array = input;

    array.forEach(line => {
        let [day, name] = line.split(' ');

        if (!meetings.has(day)) {
            meetings.set(day, name);
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    });
    for (let [key, value] of meetings) {
        console.log(`${key} -> ${value}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);