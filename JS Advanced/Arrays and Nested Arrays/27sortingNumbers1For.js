function sortingNumbers(array) {

    const arrayOfNumbers = array;
    const sortedNumbers = arrayOfNumbers.sort((a, b) => a - b);
    const sortedNumbersL = sortedNumbers.length;
    const result = [];

    for (let i = 0; i < sortedNumbersL; i++) {
        let firstNum = sortedNumbers.shift();
        let lastNum = sortedNumbers.pop();
        if (result.length === sortedNumbersL) {
            break;
        }
        result.push(firstNum, lastNum);
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);