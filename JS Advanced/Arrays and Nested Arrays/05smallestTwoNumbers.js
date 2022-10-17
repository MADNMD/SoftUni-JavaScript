function smallestTwoNumbers(array) {

    const sortedArray = array
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
    console.log(sortedArray);

}
smallestTwoNumbers([30, 15, 50, 5]);