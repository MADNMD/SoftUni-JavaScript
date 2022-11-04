function wordsTracker(input) {

    const searchingWords = input.shift().split(' ');
    const words = new Map();
    const sentence = input;

    searchingWords.forEach(word => {
        let counter = 0;
        sentence.forEach(currentWord => {
            if (word === currentWord) {
                counter++;
            }
        });
        words.set(word, counter);
    });
    const sortedByCount = Array.from(words.entries());
    sortedByCount.sort((a, b) => b[1] - a[1]);

    sortedByCount.forEach(wordAndCount => {
        console.log(`${wordAndCount[0]} - ${wordAndCount[1]}`);
    });
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);


    // const searchingWords = input.shift().split(' ');
    // const words = {};
    // const sentence = input;

    // searchingWords.forEach(word => {
    //     let counter = 0;
    //     sentence.forEach(currentWord => {
    //         if (word === currentWord) {
    //             counter++;
    //         }
    //     });
    //     words[word] = counter;
    // });
    // const sortByCount = Object.entries(words);
    // sortByCount.sort((a, b) => b[1] - a[1]);

    // sortByCount.forEach(wordAndCount => {
    //     console.log(`${wordAndCount[0]} - ${wordAndCount[1]}`);
    // });