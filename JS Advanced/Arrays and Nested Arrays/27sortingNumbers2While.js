function sortingNumbers(array) {

    const sortedNumbers = array.sort((a, b) => a - b);
    const result = [];

    while (sortedNumbers.length !== 0) {
        result.push(sortedNumbers.shift());
        result.push(sortedNumbers.pop());
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);