function sumOfTwoNumbers(input) {

    let startNumber = Number(input[0]);
    let ednNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;

    let combinationCounter = 0;

    for (let s = startNumber; s <= ednNumber; s++) {
        for (let e = startNumber; e <= ednNumber; e++) {
            combinationCounter++;
            if (s + e === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${s} + ${e} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["1", "10", "5"]);