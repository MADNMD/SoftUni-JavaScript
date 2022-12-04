function hogwarts(input) {

    const arrayInput = input.slice();
    let spell = arrayInput.shift();
    let line = arrayInput.shift();

    while (line !== 'Abracadabra') {

        let [command, ...data] = line.split(' ');

        if (command === 'Abjuration') {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (command === 'Necromancy') {
            spell = spell.toLowerCase();
            console.log(spell);
        } else if (command === 'Illusion') {
            const index = Number(data[0]);
            const letter = data[1];

            if (spell[index]) {
                const currentLetter = spell[index];
                spell = spell.replace(currentLetter, letter);
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
        } else if (command === 'Divination') {
            const fisrtStr = data[0];
            const secondStr = data[1];

            if (spell.includes(fisrtStr)) {
                while (spell.includes(fisrtStr)) {
                    spell = spell.replace(fisrtStr, secondStr);
                }
            }
            console.log(spell);
        } else if (command === 'Alteration') {
            const string = data[0];

            if (spell.includes(string)) {
                spell = spell.replace(string, '');
                console.log(spell);
            }
        } else {
            console.log('The spell did not work!');
        }
        line = arrayInput.shift();
    }
}
// hogwarts([
//     "A7ci0",
//     "Illusion 1 c",
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"]);

// hogwarts([
//     "TR1GG3R",
//     "Necromancy",
//     "Illusion 8 m",
//     "Illusion 9 n",
//     "Abracadabra"]);

hogwarts([
    "SwordMaster",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"]);