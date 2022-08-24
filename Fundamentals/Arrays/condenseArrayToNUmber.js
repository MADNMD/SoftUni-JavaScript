function condenseArrayToNumber(arr) {
    let myArr = arr;
    let condenseNumber = [];

    for (let elements of myArr) {
        condenseNumber.push(elements);
    }
    while (condenseNumber.length > 1) {
        let tempArr = [];
        for (let i = 0; i < condenseNumber.length - 1; i++) {
            tempArr[i] = condenseNumber[i] + condenseNumber[i + 1];
        }
        condenseNumber = tempArr;
    }
    console.log(condenseNumber.join());
}
condenseArrayToNumber([2, 10, 3]);