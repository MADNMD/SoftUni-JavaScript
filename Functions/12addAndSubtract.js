function addAndSubtract(fNum, sNum, tNum) {

    function sumTwoNumbers(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let sum = sumTwoNumbers(fNum, sNum);

    function subtract(sum, threeNum) {
        return sum - threeNum;
    }
    let finalResult = subtract(sum, tNum);

    console.log(finalResult);
}
addAndSubtract(23, 6, 10);