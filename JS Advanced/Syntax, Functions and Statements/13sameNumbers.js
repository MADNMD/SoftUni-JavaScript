function sameNumbers(num) {
    let number = num.toString();
    let isSame = true;
    let sumOfAllDigits = 0;
    let firstDigit = Number(number[0]);
    let numberL = number.length;

    for (let i = 0; i < numberL; i++) {

        let currentDigit = Number(number[i]);
        sumOfAllDigits += currentDigit;

        if (currentDigit === firstDigit) {
            isSame = true;
        } else {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfAllDigits);
}
sameNumbers(1234);