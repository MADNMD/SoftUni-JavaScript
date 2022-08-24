function mergeArrays(arr1, arr2) {

    let firstArray = arr1;
    let secondArray = arr2;
    let firstArrayL = firstArray.length;
    let finalArray = [];

    for (let i = 0; i < firstArrayL; i++) {
        
        if (i % 2 === 0) {
            finalArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        }else {
            finalArray[i] = firstArray[i] + secondArray[i];
        }
    }
    console.log(finalArray.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);