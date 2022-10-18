function extractIncreasingSubsetfromArray(array) {

    let cuurentBiggestNumber = Number.MIN_SAFE_INTEGER;

    const result = array.filter(currentNumber => {
        if (currentNumber >= cuurentBiggestNumber) {
            cuurentBiggestNumber = currentNumber;
            return true;
        }
    })
    return result;
}
extractIncreasingSubsetfromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);