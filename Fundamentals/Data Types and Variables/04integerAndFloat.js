function integerAndFloat(firstNum, secondNum, thirdNum){
let sum = firstNum + secondNum + thirdNum;
let result = sum % 1 === 0 ? 'Integer' : 'Float';
console.log(`${sum} - ${result}`);
}
integerAndFloat(9, 100, 1.1);