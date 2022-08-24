function factorialDivision(firstNum, secondNum) {

    function factorialCalculator(number) {
        let result = 1;
        while (number != 1) {
            result *= number;
            number -= 1;
        }
        return result;
    }
    let finalDivisionResult = factorialCalculator(firstNum) / factorialCalculator(secondNum);
    console.log(finalDivisionResult.toFixed(2));
}
factorialDivision(5, 2);