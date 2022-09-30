function mirrorWords(input) {
    const pattern = /([@#])([A-Za-z]{3,})(\1)(\1)([A-Za-z]{3,})(\1)/g;
    let words = [];
    let match = pattern.exec(input);
    let wordCount = 0;

    while (match !== null) {
        wordCount++
        let firstWord = match[2];
        let secondWord = match[5];
        let reversedWord = secondWord.split('').reverse().join('');
        if (firstWord === reversedWord) {
            words.push(firstWord + ' <=> ' + secondWord);
        }
        match = pattern.exec(input)
    }
    if (wordCount !== 0) {
        console.log(`${wordCount} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if (words.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log("The mirror words are:");
        console.log(words.join(', '));
    }
}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);

//----------------------------------------------------

// let regex = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})/g;
// let validPairs = [];
// let validPair = null;

// while (validPair = regex.exec(input)) {
//     validPairs.push(validPair.groups);
// }
// console.log(validPairs.length ? `${validPairs.length} word pairs found!` : "No word pairs found!");
// let mirrorWords = validPairs.filter(pair => isMirrorPair(pair));
// if (mirrorWords.length) {
//     console.log('The mirror words are:');
//     console.log(mirrorWords.map(pair => `${pair.word1} <=> ${pair.word2}`).join(', '));
// } else {
//     console.log('No mirror words!');
// }


// function isMirrorPair(pair) {
//     return pair.word1 === pair.word2.split('').reverse().join('');
//}