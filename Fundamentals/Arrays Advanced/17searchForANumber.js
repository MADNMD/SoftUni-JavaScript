function searchForANumber(array, numberOfManipolations) {

    let numberTakeFromArr = numberOfManipolations[0];
    let deleteNumberFromArr = numberOfManipolations[1];
    let searchNumber = numberOfManipolations[2];

    let manipolationArray = array.splice(0, numberTakeFromArr);
    manipolationArray.splice(0, deleteNumberFromArr);
    let manipolationArrayL = manipolationArray.length;
    let counter = 0;
    for (let i = 0; i < manipolationArrayL; i++) {
        let currentNum = manipolationArray[i];
        if (currentNum === searchNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);