function amazingNumbers(input) {
    let number = input;
    let numberAsString = number.toString();
    let numberAsStringL = numberAsString.length;
    let sum = 0;
    let isAmazing;

    for (let i = 0; i < numberAsStringL; i++) {
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }
    sum = sum.toString().includes('9');
    console.log(sum
        ? `${number} Amazing? ${'True'}`
        : `${number} Amazing? ${'False'}`);
}
amazingNumbers(999);

// let number = input;
// let numberAsString = number.toString();
// let numberAsStringL = numberAsString.length;
// let sum = 0;
// let isAmaizing;

// for (let i = 0; i < numberAsStringL; i++) {
//     let currentDigit = Number(numberAsString[i]);
//     sum += currentDigit;
// }
// sum = sum.toString();
// if (sum.includes('9')) {
//     isAmaizing = 'True';
//     console.log(`${number} Amazing? ${isAmaizing}`);
// } else {
//     isAmaizing = 'False';
//     console.log(`${number} Amazing? ${isAmaizing}`);
// }