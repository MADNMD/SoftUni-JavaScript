function theImitationGame(input) {
    let myWord = input.shift();
    let line = input.shift();

    while (line !== 'Decode') {
        let tokens = line.split('|');
        let command = tokens[0];

        if (command === 'ChangeAll') {
            let subString = tokens[1];
            let replaceEl = tokens[2];
            myWord = myWord.split(subString).join(replaceEl);
        } else if (command === 'Insert') {
            let index = tokens[1];
            let value = tokens[2];
            let firstPart = myWord.substring(0, index);
            let secondPart = myWord.substring(index);
            myWord = firstPart + value + secondPart
        } else if (command === 'Move') {
            let index = tokens[1];
            let firstPart = myWord.substring(0, index);
            let secondPart = myWord.substring(index);
            myWord = secondPart + firstPart;
        }
        line = input.shift();
    }
    console.log(`The decrypted message is: ${myWord}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);