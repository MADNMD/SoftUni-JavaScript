function biggestElement(matrix) {

    const matrixL = matrix.length;
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < matrixL; i++) {
        const currentArray = matrix[i];

        for (let j = 0; j < currentArray.length; j++) {
            const currentNumber = currentArray[j];

            if (currentNumber >= biggestNumber) {
                biggestNumber = currentNumber;
            }
        }
    }
    return biggestNumber;
}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);