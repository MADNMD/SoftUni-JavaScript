function mathOperations(num1, num2, opr) {
    let fisrtNumber = num1;
    let secondNumber = num2;
    let operator = opr;
    switch (operator) {
        case '+': console.log(fisrtNumber + secondNumber); break;
        case '-': console.log(fisrtNumber - secondNumber); break;
        case '*': console.log(fisrtNumber * secondNumber); break;
        case '/': console.log(fisrtNumber / secondNumber); break;
        case '%': console.log(fisrtNumber % secondNumber); break;
        case '**': console.log(fisrtNumber ** secondNumber); break;
    }
}
mathOperations(3, 5.5, '*');