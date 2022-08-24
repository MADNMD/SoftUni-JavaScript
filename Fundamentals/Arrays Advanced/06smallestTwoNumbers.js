function smallestTwoNumbers(array) {

    let sortedNumber = array.sort((a, b) => a - b);
    let result = sortedNumber.slice(0,2);
    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);