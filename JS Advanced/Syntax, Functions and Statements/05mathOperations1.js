function mathOperations(num1, num2, opr) {
    let operation = eval(`${num1}${opr}${num2}`);
    console.log(operation);
}
mathOperations(3, 5.5, '*')