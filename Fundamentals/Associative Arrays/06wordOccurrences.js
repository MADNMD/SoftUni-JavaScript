function wordOccurrences(input) {

    const listOfWord = {};
    const list = input;

    list.forEach(word => {
        let counter = 0;
        if (!listOfWord[word]) {
            counter++;
            listOfWord[word] = counter;
        } else {
            counter++;
            listOfWord[word] += counter;
        }
    });
    const sortedByOccurrences = Object.entries(listOfWord);
    sortedByOccurrences.sort((a, b) => b[1] - a[1]);

    sortedByOccurrences.forEach(word => {
        console.log(`${word[0]} -> ${word[1]} times`);
    });
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"]);

    //let wordL = word.length;
    // for (let i = 0; i < wordL; i++) {
    //     let currentWordCount = occurences[word[i]];
    //     let count = currentWordCount ? currentWordCount : 0;
    //     occurences[word[i]] = count + 1;
    // }

    //------------------------


    // let occurences = {};
    // for (let word of input) {
    //     if (occurences.hasOwnProperty(word)) {
    //         let currenCount = occurences[word];
    //         occurences[word] = currenCount + 1;
    //     } else {
    //         occurences[word] = 1;
    //     }
    // }
    // let entires = Object.entries(occurences);
    // let sortedOccurenses = entires.sort((a, b) => b[1] - a[1]);
    // for (let wordAndCount of sortedOccurenses) {
    //     // let word = wordAndCount.shift();
    //     //let count = wordAndCount.shift();
    //     console.log(`${wordAndCount[0]} -> ${wordAndCount[1]} times`);
    // }
