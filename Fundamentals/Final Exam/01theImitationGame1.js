function theImitationGame(input) {

    const inputArray = input.slice();
    let message = inputArray.shift();

    let line = inputArray.shift();

    while (line !== 'Decode') {

        let [command, ...data] = line.split('|');

        if (command === 'Move') {

            const movesLetters = Number(data[0]);
            let firstHalfMessage = message.substring(0, movesLetters);
            let secondHalfMessage = message.substring(movesLetters);
            message = secondHalfMessage + firstHalfMessage;

        } else if (command === 'Insert') {

            const index = Number(data[0]);
            const value = data[1];
            message = message.split('');
            message.splice(index, 0, value);
            message = message.join('');

        } else if (command === 'ChangeAll') {

            const subString = data[0];
            const replacement = data[1];
            while (message.includes(subString)) {
                message = message.replace(subString, replacement);
            }
        }
        line = inputArray.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);

    theImitationGame([
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',]);