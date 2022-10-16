function wordsUppercase(string) {

    let regex = /\w+/g;
    let wordMatch = string.match(regex);
    let wordToUpperCase = wordMatch.map(word => word.toUpperCase());
    console.log(wordToUpperCase.join(', '));
}
wordsUppercase('Hi, how are you?');

// let regex = /(?<word>\w+)/g;
//     let wordMatch = regex.exec(string);
//     let wordToUpperCase = []

//     while (wordMatch !== null) {

//         let currentWord = wordMatch.groups.word;

//         currentWord = currentWord.toUpperCase();

//         wordToUpperCase.push(currentWord)

//         wordMatch = regex.exec(string);
//     }
//     console.log(wordToUpperCase.join(', '));