function negativeOrPositiveNumbers(array) {

    let arrayL = array.length;
    let result = [];

    for (let i = 0; i < arrayL; i++) {
        let currentNum = Number(array[i]);
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum);
        }
    }
    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);