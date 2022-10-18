function extractIncreasingSubsetfromArray(array) {


    let cuurentBiggestNumber = Number.MIN_SAFE_INTEGER;
    const result = [];

    array.map(currentNumber => {
        if (currentNumber >= cuurentBiggestNumber) {
            cuurentBiggestNumber = currentNumber;
            result.push(cuurentBiggestNumber);
        }
    })
   return result;
}
extractIncreasingSubsetfromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);