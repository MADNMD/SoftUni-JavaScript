function wordOccurrences(input) {

    const listOfWord = new Map();
    const list = input;

    list.forEach(word => {
        let count = 0;
        if (!listOfWord.has(word)) {
            count++;
            listOfWord.set(word, count);
        } else {
            count++;
            let currentCount = listOfWord.get(word);
            currentCount += count;
            listOfWord.set(word, currentCount);
        }
    });
    const sortedByOccurrences = Array.from(listOfWord.entries());
    sortedByOccurrences.sort((a, b) => b[1] - a[1]);

    sortedByOccurrences.forEach(word => {
        console.log(`${word[0]} -> ${word[1]} times`);
    });
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence", "Here", "is", "another",
    "sentence", "And", "finally", "the", "third", "sentence"]);


    // let words = new Map();
    // for (let word of input) {
    //     if (words.has(word)) {
    //         let curruentCount = words.get(word);
    //         words.set(word, curruentCount + 1);
    //     } else {
    //         words.set(word, 1);
    //     }
    // }
    // let wordsArray = Array.from(words);
    // let sortedWord = wordsArray.sort((a, b) => b[1] - a[1]);
    // for (let word of sortedWord) {
    //     console.log(`${word[0]} -> ${word[1]} times`);
    // }