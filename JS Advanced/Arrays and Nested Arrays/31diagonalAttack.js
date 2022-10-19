function diagonalAttack(array) {

    const matrix = [];

    while (array.length > 0) {
        matrix.push(array.shift().split(' ').map(Number));
    }
    const matrixL = matrix.length;

    let leftDiagonal = 0;
    let rigthDiagonal = 0;

    for (let i = 0; i < matrixL; i++) {
        leftDiagonal += matrix[i][i];
        rigthDiagonal += matrix[i][matrixL - 1 - i];
    }

    if (leftDiagonal === rigthDiagonal) {
        for (let row = 0; row < matrixL; row++) {
            for (let col = 0; col < matrixL; col++) {
                if ((col !== matrixL - 1 - row) && (col !== row)) {
                    matrix[row][col] = leftDiagonal;
                }
            }
        }
    }
    for (let i = 0; i < matrixL; i++) {
        console.log(matrix[i].join(' '));
    }
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);   