function magicSum(array, uniqueNum) {

   
    let arrayL = array.length;
    let result = '';
    let arrayOnValid = [];

    for (let i = 0; i < arrayL; i++) {

        let firstNumber = array[i];

        for (let j = i + 1; j < arrayL; j++) {

            let secondNumber = array[j];

            if(firstNumber + secondNumber === uniqueNum){
                result = `${firstNumber} ${secondNumber}`;
                arrayOnValid.push(result);
            }
        }
    }
    console.log(arrayOnValid.join('\n'));
}
magicSum([1, 2, 3, 4, 5, 6], 6);


// let myArray = arr;
// let myArrayL = myArray.length;
// let magicNum = num;
// let sum = 0;

// for(let i = 0; i < myArrayL; i++){
//     let currentNum = Number(myArray[i]);

//     for(let j = i + 1; j < myArrayL; j++){
//         let nextNum = Number(myArray[j]);
//         sum = currentNum + nextNum;
        
//         if(sum === magicNum){
//             console.log(currentNum, nextNum);
//         }
//     }
// }

//----------------------------------------------------------------

// let myArray = arr;
// let magicNum = num;
// let myArrayL = myArray.length;


// for (let i = 0; i < myArrayL; i++) {
//     let currentDigit = Number(myArray[i]);

//     for (let j = myArrayL - 1; j > i; j--) {
//         let additionNumber = Number(myArray[j]);

//         let sum = 0;

//         sum = currentDigit + additionNumber;

//         if (sum === magicNum) {
//             let newArray = [];
//             newArray.push(currentDigit, additionNumber)
//             console.log(newArray.join(' '));
//         }
//     }
// }
