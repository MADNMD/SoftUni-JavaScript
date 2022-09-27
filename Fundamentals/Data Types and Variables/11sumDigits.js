function sumDigits(number) {
    let numberAsString = number
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b, 0);
    
    console.log(numberAsString);
}
sumDigits(245678);

// let numberAsString = number.toString();
// let numberAsStringL = numberAsString.length;
// let sum = 0;
// for (let i = 0; i < numberAsStringL; i++) {
//     let currentDigit = Number(numberAsString[i]);
//     sum += currentDigit;
// }
// console.log(sum);