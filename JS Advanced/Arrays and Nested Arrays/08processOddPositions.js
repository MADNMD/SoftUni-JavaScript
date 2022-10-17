function processOddPositions(array) {

    const oddPositions = array
        .filter((parameter, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse();
    return oddPositions;

}
processOddPositions([10, 15, 20, 25]);
