function sumEvenNumbers(arr) {

    let myArr = arr;
    let myArrL = myArr.length;

    for (let i = 0; i < myArrL; i++) {
        myArr[i] = Number(myArr[i]);
    }
    let sum = 0;
    for (let num of myArr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['2','4','6','8','10']);


// let myArr = arr;
//     let myArrL = myArr.length;
//     let currentDigit;
//     let sum = 0;

//     for (let i = 0; i < myArrL; i++) {
//         currentDigit = +myArr[i];
//         if (currentDigit % 2 === 0) {
//             sum += currentDigit;
//         }
//     }
//     console.log(sum);