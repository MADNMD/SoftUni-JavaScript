function diagonalSums(matrix) {

    let firstSum = 0;
    let secondSum = 0;
    const matrixL = matrix.length;
    const result = [];

    for (let row = 0; row < matrixL; row++) {
        firstSum += matrix[row][row];
        secondSum += matrix[row][matrixL - row - 1];
    }
    result.push(firstSum, secondSum);
    console.log(result.join(' '));
}
diagonalSums([
    [20, 40],
    [10, 60]]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);