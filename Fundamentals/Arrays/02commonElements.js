function commonElements(arr1, arr2) {

    let firstArray = arr1;
    let secondArray = arr2;
    let firstArrayL = firstArray.length;
    let secondArrayL = secondArray.length;

    for (let i = 0; i < firstArrayL; i++) {
        for (let j = 0; j < secondArrayL; j++) {
            if (firstArray[i] === secondArray[j]) {
                console.log(firstArray[i]);
            }
        }
    }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);

    //---------------------------------------------------------------------------------------

    // for (let element of array1) {
    //     if (array2.includes(element)) {
    //         console.log(element);
    //     }
    // }
