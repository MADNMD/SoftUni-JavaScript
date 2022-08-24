function addAndSUbtrackt(arr){

    let currentArray = arr;
    let currentArrayL = currentArray.length;
    let sumOfNewArray = 0;
    let sumOfOldArray = 0;
    let newArray = [];

    for(let i = 0; i < currentArrayL; i++){
        let cureentDigit = +currentArray[i];
        sumOfOldArray += cureentDigit;

        if(cureentDigit % 2 === 0){
            cureentDigit += i;
        }else {
            cureentDigit -= i;
        }
        newArray.push(cureentDigit);
        sumOfNewArray += cureentDigit;
    }
    console.log(newArray);
    console.log(sumOfOldArray);
    console.log(sumOfNewArray);
}
addAndSUbtrackt([5, 15, 23, 56, 35]);

// let myArr = input;
// let myArrL = myArr.length;
// let newArray = [];
// let sumOfOldArray = 0;
// let sumOfNewArray = 0;


// for(let i = 0; i < myArrL; i++){
//     let currentNumber = Number(myArr[i]);

//     if(currentNumber % 2 === 0){
//         newArray[i] = currentNumber + i;
//     }else {
//         newArray[i] = currentNumber - i;
//     }
  
//     sumOfOldArray += currentNumber;
//     sumOfNewArray += Number(newArray[i]);
// }
// console.log(newArray);
// console.log(sumOfOldArray);
// console.log(sumOfNewArray);

//--------------------------------------------

// let myArray = arr;
// let myArrayL = myArray.length;
// let newArray = [];
// let sumOldArray = 0;
// let sumNewArray = 0;


// for (let i = 0; i < myArrayL; i++) {
//     let currentNum = Number(myArray[i]);
//     sumOldArray += currentNum;
//     if (currentNum % 2 === 0) {
//         newArray.push(currentNum + i);
//     } else {
//         newArray.push(currentNum - i);
//     }
//     sumNewArray += Number(newArray[i]);
// }
// console.log(newArray);
// console.log(sumOldArray);
// console.log(sumNewArray);