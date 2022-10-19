function magicMatrices(matrix) {

    let matrixL = matrix.length;
    let rowSum = matrix[0].reduce((a, b) => a + b);

    for (let row = 0; row < matrixL; row++) {
        let currentColSum = 0;

        for (let col = 0; col < matrixL; col++) {
            currentColSum += matrix[col][row];
        }
        if (currentColSum !== rowSum) {
            return false;
        }
    }
    return true;
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
