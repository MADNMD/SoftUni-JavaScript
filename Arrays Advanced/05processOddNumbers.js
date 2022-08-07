function processOddNumbers(array) {

    let finalResult = array
        .filter((element, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse().join(' ');
    console.log(finalResult);
}
processOddNumbers([10, 15, 20, 25]);

//----------------------------------------------

// let filterNumbers = array.filter((element, i) => i % 2 !== 0);
// let mapNumbers = filterNumbers.map(x => x * 2);
// let reversedNumber = mapNumbers.reverse();
// console.log(reversedNumber.join(' '));

//----------------------------------------
// let arrayL = array.length;
//     let result = [];

//     for (let i = 0; i < arrayL; i++) {
//         let currentNum = array[i];
//         if (i % 2 !== 0) {
//             result.push(currentNum * 2);
//         }
//     }
//     console.log(result.reverse().join(' '));