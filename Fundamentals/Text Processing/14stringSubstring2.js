function cutAndReverse(word, sentence) {

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
cutAndReverse('python',
    'JavaScript is the best programming language'
);