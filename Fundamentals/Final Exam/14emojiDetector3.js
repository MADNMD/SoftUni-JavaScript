function emojiDetector(input) {

    const arrayInput = input.slice();

    const patternOnNumbers = /\d/g;
    const pattern = /((\*\*)|(::))(?<word>[A-Z][a-z]{2,})\1/g;
    let coolThreshold = 1;
    let emojisCounter = 0;
    const validEmojis = [];

    let numbers = patternOnNumbers.exec(arrayInput);
    let emojis = pattern.exec(arrayInput);

    while (numbers !== null) {

        numbers = Number(numbers[0]);
        coolThreshold *= numbers;

        numbers = patternOnNumbers.exec(arrayInput);
    }

    while (emojis !== null) {

        emojisCounter++;
        let charCounter = 0;

        let emoji = emojis.groups.word.split('');

        for (let char of emoji) {
            charCounter += char.charCodeAt();
        }
        if (charCounter > coolThreshold) {
            validEmojis.push(emojis[0]);
        }

        emojis = pattern.exec(arrayInput);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojisCounter} emojis found in the text. The cool ones are:`);
    validEmojis.forEach(emoji => console.log(`${emoji}`));
}
// emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])