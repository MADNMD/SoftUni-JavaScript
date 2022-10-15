function largestNumber(num1, num2, num3) {

    let firstNumber = num1;
    let secondNumber = num2;
    let thirdNumber = num3;
    let sortNumbers = [];

    sortNumbers.push(firstNumber, secondNumber, thirdNumber);
    sortNumbers = sortNumbers.sort((a, b) => b - a);
    let largestNumber = sortNumbers.shift();
    console.log(`The largest number is ${largestNumber}.`);

}
largestNumber(5, -3, 16);