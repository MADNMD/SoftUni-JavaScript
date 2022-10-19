function magicMatrices(matrix) {

    const matrixL = matrix.length;
    let currentRowSum = 0;
    let currentColSum = 0;
    let isEqualCol = false;
    let isEqualRow = false;
    const row = rowSum(matrix);
    const col = colSum(matrix);

    function rowSum(matrix) {
        for (let row = 0; row < matrixL; row++) {
            let sum = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                sum += matrix[row][col];
                if (sum >= currentRowSum) {
                    currentRowSum = sum;
                    isEqualRow = true;
                } else {
                    isEqualRow = false;
                }
            }
        }
        return isEqualRow;
    }
    function colSum(matrix) {
        let rowSize = matrix[0].length;
        for (let col = 0; col < rowSize; col++) {
            let sum = 0;
            for (let row = 0; row < matrixL; row++) {
                sum += matrix[row][col];
                if (sum >= currentColSum) {
                    currentColSum = sum;
                    isEqualCol = true;
                } else {
                    isEqualCol = false;
                }
            }
        }
        return isEqualCol;
    }

    if (row && col) {
        return true
    } else {
        return false
    }
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
// magicMatrices(
//     [[11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]);
// magicMatrices([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]);