function signCheck(num1, num2, num3) {
    let totalNegativ = 0;

    if (isNegativ(num1)) {
        totalNegativ++;
    }
    if (isNegativ(num2)) {
        totalNegativ++;
    }
    if (isNegativ(num3)) {
        totalNegativ++;
    }

    if (totalNegativ % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

    function isNegativ(number) {
        return number < 0;
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);