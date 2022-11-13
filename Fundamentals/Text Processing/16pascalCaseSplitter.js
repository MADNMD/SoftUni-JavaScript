function pascalCaseSplitter(input) {
    let words = [];
    for (let letter of input) {
        if (letter === letter.toUpperCase()) {
            words.push(letter);
        } else {
            words[words.length - 1] += letter;
        }
    }
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
