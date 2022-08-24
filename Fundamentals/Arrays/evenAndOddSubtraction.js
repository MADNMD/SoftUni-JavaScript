function evenAndOddSubtraction(arr) {

    let myArr = arr;
    let evenSum = 0;
    let oddSum = 0;
    let finalSum = 0;

    for (let num of myArr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    finalSum = evenSum - oddSum;
    console.log(finalSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);