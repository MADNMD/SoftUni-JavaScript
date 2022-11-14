function pascalCaseSplitter(input) {

    let words = [];
    let currentWord = input[0];
    let text = input.length;
    for (let i = 1; i < text; i++) {
        if (input[i].toUpperCase() !== input[i]) {
            currentWord = currentWord.concat(input[i]);
        } else {
            words.push(currentWord);
            currentWord = input[i];
        }
    }
    words.push(currentWord);
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')