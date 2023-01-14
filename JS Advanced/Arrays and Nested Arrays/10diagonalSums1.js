function diagonalSum(matrix) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;
    const matrixL = matrix.length;

    for (let row = 0; row < matrixL; row++) {
        firstDiagonal += matrix[row][row];
    }

    matrix.reverse();

    for (let row = 0; row < matrixL; row++) {
        secondDiagonal += matrix[row][row];
    }
    console.log(`${firstDiagonal} ${secondDiagonal}`);
}
diagonalSum(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);