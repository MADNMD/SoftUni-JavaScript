function biggestOf3Numbers(firstNumber, secondNumber, thurdNumber) {

    if (firstNumber >= secondNumber && firstNumber >= thurdNumber) {
        console.log(firstNumber);
    } else if (secondNumber >= firstNumber && secondNumber >= thurdNumber) {
        console.log(secondNumber);
    } else if (thurdNumber >= firstNumber && thurdNumber >= secondNumber) {
        console.log(thurdNumber);
    }
}
biggestOf3Numbers(2, 2, 2);