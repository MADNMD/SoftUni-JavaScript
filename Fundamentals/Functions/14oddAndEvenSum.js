function oddAndEvenSum(num) {

    let singleNumber = num.toString();
    let singleNUmberL = singleNumber.length;

    let takeOddSum = function () {
        let oddSum = 0;
        for (let j = 0; j < singleNUmberL; j++) {
            let currentDigit = Number(singleNumber[j]);
            if (currentDigit % 2 !== 0) {
                oddSum += currentDigit;
            }
        }
        return oddSum;
    }
    let takeEvenSum = () => {
        let evenSum = 0;
        for (let i = 0; i < singleNUmberL; i++) {
            let currentDigit = Number(singleNumber[i]);
            if (currentDigit % 2 === 0) {
                evenSum += currentDigit;
            }
        }
        return evenSum;
    }
    let oddSum = takeOddSum(num);
    let evenSum = takeEvenSum(num);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);

//--------------------------------------------------------------------------

// let singleNUmber = num.toString();
// let numAsArray = singleNUmber.split('');
// let numAsArrayL = numAsArray.length;
// let evenSum = 0;
// let oddSum = 0;

// for (let i = 0; i < numAsArrayL; i++) {

//     let currentDigit = Number(numAsArray[i]);

//     if (currentDigit % 2 === 0) {
//         evenSum += currentDigit;
//     } else {
//         oddSum += currentDigit
//     }
// }
// console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);