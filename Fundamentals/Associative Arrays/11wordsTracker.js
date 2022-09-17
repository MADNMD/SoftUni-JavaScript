function wordsTracker(input) {

    let searchWords = {};
    let words = input.shift().split(' ');
    for (let word of words) {
        searchWords[word] = 0;
    }
    for (let word of input) {
        if (searchWords.hasOwnProperty(word)) {
            searchWords[word] += 1;
        }
    }
    let entries = Object.entries(searchWords);
    let sortedByCount = entries.sort((a, b) => {
        return b[1] - a[1];
    });
    // for (let word of sortedByCount) {
    //     console.log(`${word[0]} - ${word[1]}`);
    // }
    sortedByCount.forEach(el => console.log(el[0], '-', el[1]));
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);