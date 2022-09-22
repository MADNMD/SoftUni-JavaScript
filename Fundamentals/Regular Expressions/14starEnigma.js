function starEnigma(input) {
    let messages = Number(input.shift());
    let regex = /@([A-Z][a-z]+)[^@\-!:>]*:\d+!(A|D)![^@\-!:>]*->\d+/;
    let atacked = [];
    let destryed = [];

    for (let i = 0; i < messages; i++) {
        let encryptedMessages = input[i];
        let count = encryptedMessages
            .toLowerCase()
            .split('')
            .filter(char => char.includes('s') || char.includes('t') || char.includes('a') || char.includes('r'))
            .length;
        let cryptedMessages = encryptedMessages.split('').map(char => String.fromCharCode(char.charCodeAt(0) - count)).join('');
        let regexMatch = cryptedMessages.match(regex);
        if (regexMatch) {
            if (regexMatch[2] === 'A') {
                atacked.push(regexMatch[1]);
            } else if (regexMatch[2] === 'D') {
                destryed.push(regexMatch[1]);
            }
        }
    }
    console.log(`Attacked planets: ${atacked.length}`);
    atacked.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destryed.length}`);
    destryed.sort((a, b) => a.localeCompare(b)).forEach(planet => console.log(`-> ${planet}`));
}
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);