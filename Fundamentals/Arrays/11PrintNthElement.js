function PrintNthElement(arr) {

    let myArr = arr;
    let step = +myArr.pop();
    let result = [];

    for (let element in myArr) {

        if (element % step === 0) {
            result.push(myArr[element]);
        }
    }
    console.log(result.join(' '));
}
PrintNthElement(['5', '20', '31', '4', '20', '2']);


//--------------------------------------


// let arrayL = array.length;
// let nSteps = array.pop();
// let newArray = [];

// for (let i = 0; i < arrayL; i++) {

//     if (i % nSteps === 0) {
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray.join(' '));

//-----------------------------------------------------------

//     let step = Number(array.pop());
//     let arrayL = array.length;
//     let newArray = [];

//     for (let i = 0; i < arrayL; i+=step) {
//         newArray.push(array[i]);
//     }
//     console.log(newArray.join(' '));