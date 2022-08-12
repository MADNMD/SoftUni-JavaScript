function isTheAverageOfAllElementsAWholeNumber(array) {
    let arrayL = array.length;
    let arrAvr = arr => arr.reduce((a, b) => a + b, 0) / arrayL;
    console.log(arrAvr(array));

    // let sum = 0;
    // let result = 0;

    // for(let i = 0; i < arrayL; i++){
    //     sum += array[i];
    // }
    // result = sum / arrayL;

    // console.log(result);
}
isTheAverageOfAllElementsAWholeNumber([1, 2, 3, 4]);