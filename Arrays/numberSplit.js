function numberSplit(number) {
    let newNumber = number;
    let leftNum = 0;
    let rightNum = 0;
    let newArray = [];

    if (number < 0) {
        newNumber = Math.abs(number);
    }

    for (let i = 0; i < newNumber; i++) {
        leftNum += 1;
        if (leftNum > rightNum) {
            rightNum += 1;
            leftNum -= 1;
        }
    }
    if (number < 0) {
        rightNum = -Math.abs(rightNum);
        leftNum = -Math.abs(leftNum);
        if (leftNum > rightNum) {
            leftNum = rightNum;
            rightNum = leftNum + 1;

        }
    }
    newArray.push(leftNum, rightNum);
    console.log(newArray);
}
numberSplit(1);