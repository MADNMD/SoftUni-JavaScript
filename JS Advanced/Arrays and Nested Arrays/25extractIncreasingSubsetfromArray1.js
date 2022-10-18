function extractIncreasingSubsetfromArray(array) {

    const arrayL = array.length;
    const result = [];
    let cuurentBiggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arrayL; i++) {
        let currentNumber = array[i];
        if (currentNumber >= cuurentBiggestNumber) {
            cuurentBiggestNumber = currentNumber;
            result.push(cuurentBiggestNumber);
        }
    }
    return result;
}
extractIncreasingSubsetfromArray();