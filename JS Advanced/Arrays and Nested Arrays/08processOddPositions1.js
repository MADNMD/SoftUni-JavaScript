function processOddPositions() {
    const oddPositions = [];
    const arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        const currentNumber = array[i];
        if (i % 2 !== 0) {
            oddPositions.push(currentNumber);
        }
    }
    const oddPositionsL = oddPositions.length;
    const finalResult = [];

    for (let i = oddPositionsL - 1; i >= 0; i--) {
        let currentNumber = oddPositions[i] * 2;
        finalResult.push(currentNumber);
    }
    return finalResult
}
processOddPositions([10, 15, 20, 25]);