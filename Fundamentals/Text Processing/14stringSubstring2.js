function stringSubstring(word, sentence) {

    const text = sentence
        .toLowerCase()
        .split(' ')
        .filter(currenWord => currenWord === word);

    if (text.length > 0) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('python',
    'JavaScript is the best programming language'
);
