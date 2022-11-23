function subtract() {

    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');

    const firstNumber = Number(firstNumberElement.value);
    const secondNumber = Number(secondNumberElement.value);

    let sum = firstNumber - secondNumber;

    const result = document.getElementById('result');
    result.textContent = sum;
}