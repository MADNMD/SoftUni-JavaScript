function biggestElement(matrix) {

    const maxNumbers = matrix.map(numbers => Math.max(...numbers));
    console.log(Math.max(...maxNumbers));

}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]]);
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);