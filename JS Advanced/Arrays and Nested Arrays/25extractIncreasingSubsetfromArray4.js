function extractIncreasingSubsetfromArray(array) {

    const result = array.reduce((biggestNumber, current) => {
        if (biggestNumber.length) {
            if (current >= biggestNumber[biggestNumber.length - 1]) {
                biggestNumber.push(current);
            }
        } else {
            biggestNumber.push(current);
        }
        return biggestNumber;
    }, [])
    return result;
}
extractIncreasingSubsetfromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);