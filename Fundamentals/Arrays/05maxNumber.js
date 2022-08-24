function maxNumber(arr) {

    let myArray = arr;
    let myArrayL = myArray.length;
    let newMaxNumArray = [];

    for (let i = 0; i < myArrayL; i++) {

        let number1 = myArray[i];
        let isLargest = true;

        for (let j = i + 1; j < myArrayL; j++) {

            let number2 = myArray[j];

            if (number1 <= number2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newMaxNumArray.push(number1);
        }
    }
    console.log(newMaxNumArray.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);

// let result = [];

//     while (arrL !== 0) {
//         let [current, biggest] = [arr.shift(), Math.max(...arr)];
//         if (current > biggest) result.push(current);

//     }
//     console.log(result.join(' '));

//-----------------------------------------------------------------------------

// let myArray = arr;
// let myArrayL = myArray.length;
// let newArray = [];

// for (let i = 0; i < myArrayL; i++) {
//     let biggestNumber = Math.max(...myArray);
//     if (myArray[i] === biggestNumber) {                            dava 83 tochki v judge
//         newArray.push(biggestNumber);
//         myArray[i] = 0;
//     }
// }
// let result = [...new Set(newArray)];
// console.log(result.join(' '));

