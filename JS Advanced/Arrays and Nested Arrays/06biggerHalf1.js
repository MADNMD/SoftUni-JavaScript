function biggerHalf(array) {

    let sortedArray = array.sort((a, b) => a - b);

    const secondHalf = [];

    for (let i = Math.floor(sortedArray.length / 2); i < sortedArray.length; i++) {
        secondHalf.push(sortedArray[i]);
    }
    return secondHalf;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);