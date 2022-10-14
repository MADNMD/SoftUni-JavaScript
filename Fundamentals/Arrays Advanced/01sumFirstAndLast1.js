function sumFirstAndLast(array){

const number = array;
const numberL = array.length;
const firstNum = Number(number[0]);
const lastNum = Number(number[numberL -1]);
const sumTwoNumbers = firstNum + lastNum;
console.log(sumTwoNumbers);
}
sumFirstAndLast(['20', '30', '40']);