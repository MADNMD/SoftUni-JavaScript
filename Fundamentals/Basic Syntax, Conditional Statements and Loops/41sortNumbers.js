function sortNumbers(firstNumber, secondNumber, thirdNumber) {

    let numbers = [];
    numbers.push(firstNumber, secondNumber, thirdNumber);
    let sortedNumbers = numbers.sort((a, b) => b - a);
    console.log(sortedNumbers.join('\n'));
}
sortNumbers(-2, 1, 3);