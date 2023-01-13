function extractIncreasingSubsetfromArray(array) {

    let startNum = array[0];
    const result = [];

    array.forEach(number => {
        if (startNum <= number) {
            startNum = number;
            result.push(number);
        }
    });
    return result;
}
extractIncreasingSubsetfromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsetfromArray([20, 3, 2, 15, 6, 1]);