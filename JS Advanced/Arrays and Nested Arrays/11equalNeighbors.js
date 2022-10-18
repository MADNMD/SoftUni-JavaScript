function equalNeighbors(matrix) {

    const matrixL = matrix.length;
    let counter = 0;

    for (let row = 0; row < matrixL; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] === matrix[row][col + 1]) {
                counter++;
            }
        }
    }
    const rowSize = matrix[0].length;

    for (let col = 0; col < rowSize; col++) {
        for (let row = 0; row < matrixL - 1; row++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);