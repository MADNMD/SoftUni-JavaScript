function revealWords(words, text) {

    let sentence = text.split(' ');
    let word = words.split(', ');
    let sentenceL = sentence.length;
    for (let i = 0; i < sentenceL; i++) {
        let token = sentence[i];
        if (token.includes('*')) {
            let index = sentence.indexOf(token);
            for (let i = 0; i < word.length; i++) {
                if (token.length === word[i].length) {
                    sentence.splice(index, 1, word[i]);
                }
            }
        }
    }
    console.log(sentence.join(' '));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');