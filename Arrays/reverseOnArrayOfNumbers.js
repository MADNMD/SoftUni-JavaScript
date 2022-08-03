function reverseAnArrayOfNumbers(n, arr) {

    let myArr = arr;
    let newArray = [];
    let num = n;

    for (let i = num - 1; i >= 0; i--) {
        newArray.push(myArr[i]);
    }
    let result = newArray.join(' ');
    console.log(result);

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);



// let num = n;
//     let myArr = arr;
//     let currentArray = [];
//     let newArray = [];

//     for (let i = 0; i < num; i++) {
//         currentArray[i] = myArr[i];
//     }
//     for (let j = currentArray.length - 1; j >= 0; j--) {
//         newArray.push(currentArray[j]);
//     }
//     console.log(newArray.join(' '));
//--------------------------------------------
// let rotation = n;
// let myArray = arr;
// let myArrayL = myArray.length;
// let newArray = [];

// for(let i = 0; i < rotation; i++){
//     newArray.push(myArray[i]);
//     newArray.reverse();
// }
// console.log(newArray.join(' '));