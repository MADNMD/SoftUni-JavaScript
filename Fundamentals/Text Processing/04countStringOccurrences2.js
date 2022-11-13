function countStringOccurrences(text, word) {

    let counter = 0;
    let sentence = text.split(' ');
    for (let element of sentence) {
        if (element === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');