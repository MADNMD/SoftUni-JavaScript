function negativeAndPositiveNumbers(array) {

    const result = [];
    const arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let currentNumber = array[i];
        
        if (currentNumber < 0) {
            result.unshift(currentNumber);
        } else {
            result.push(currentNumber);
        }
    }
    console.log(result.join('\n'));
}
negativeAndPositiveNumbers([7, -2, 8, 9]);
negativeAndPositiveNumbers([3, -2, 0, -1]);