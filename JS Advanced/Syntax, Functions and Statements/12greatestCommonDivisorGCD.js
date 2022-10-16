function greatestCommonDivisorGCD(x, y) {

    let firstNumber = Number(x);
    let secondNumber = Number(y);

    while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }
    console.log(firstNumber);
}
greatestCommonDivisorGCD(15, 5);