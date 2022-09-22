function race(input) {

    let racers = {};
    let names = input.shift().split(', ');

    for (let line of input) {
        if (line !== 'end of race') {
            let racersName = line.match(/[A-Z]+/gi).join('');
            let recersDistance = line.match(/\d/g).map(Number).reduce((a, b) => a + b, 0);
            if (names.includes(racersName)) {
                if (racers.hasOwnProperty(racersName)) {
                    racers[racersName] += recersDistance;
                } else {
                    racers[racersName] = recersDistance;
                }
            }
        }
    }
    let sortedName = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedName[0]}\n2nd place: ${sortedName[1]}\n3rd place: ${sortedName[2]}`);
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);