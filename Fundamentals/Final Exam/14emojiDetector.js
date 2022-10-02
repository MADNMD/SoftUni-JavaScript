function emojiDetector(input) {

    let regex = /(?<emoticon>(:{2}|\*{2})[A-Z][a-z]{2,}\2)/g;
    let regex2 = /(?<num>\d+)/g;

    let matchEmoji = regex.exec(input);
    let numbers = regex2.exec(input);
    let coolTreshold = [];
    let emojiCount = 0;
    let validEmoji = [];

    while (numbers !== null) {
        let nums = numbers.groups.num;
        let splitNum = nums.split('');
        for (let i = 0; i < splitNum.length; i++) {
            coolTreshold.push(Number(splitNum[i]));
        }
        numbers = regex2.exec(input);
    }

    coolTreshold = coolTreshold.reduce((a, b) => a * b, 1);

    while (matchEmoji !== null) {
        emojiCount++;
        let sumEmoji = 0;
        let emojis = matchEmoji.groups.emoticon;
        let splitEmoji = emojis.split('');
        for (let i = 0; i < splitEmoji.length; i++) {
            let currentChar = splitEmoji[i].charCodeAt();
            if (currentChar >= 65 && currentChar <= 90 ||
                currentChar >= 97 && currentChar <= 122) {
                sumEmoji += currentChar;
            }
        }
        if (sumEmoji > coolTreshold) {
            validEmoji.push(emojis);
        }
        matchEmoji = regex.exec(input);
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    console.log(validEmoji.join('\n'));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);