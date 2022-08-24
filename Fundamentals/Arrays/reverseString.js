function reverseString(arr) {

    let word = arr[0];
    let wordToArray = word.split('');
    let arrayToReverse = wordToArray.reverse();
    let finalResult = arrayToReverse.join('');
    console.log(finalResult);

    
}
reverseString(['Hello']);


//     let word = arr[0];
//     let myArr = word.split('');
//     let myArrL = myArr.length;
//     let wordReverse = [];

//     for(let i = myArrL - 1; i >= 0; i--){
//         wordReverse.push(myArr[i]);
//     }
//     let finalResult = wordReverse.join('');
//     console.log(finalResult);
  