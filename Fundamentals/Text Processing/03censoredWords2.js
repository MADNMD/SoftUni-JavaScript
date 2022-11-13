function censoredWords(text, word) {

    let tokens = text.split(' ');
    for (let el of tokens) {
        if (el.includes(word)) {
            let index = tokens.indexOf(word);
            tokens.splice(index, 1, '*'.repeat(word.length))
        }
    }
    console.log(tokens.join(' '));
}
censoredWords('A small sentence with some small words', 'small');