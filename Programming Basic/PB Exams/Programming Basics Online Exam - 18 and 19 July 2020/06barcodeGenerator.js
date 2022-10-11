function barcodeGenerator(input) {

    let num1 = input[0];
    let num2 = input[1];
    let buff = '';

    let firstNum = Number(num1[0]);
    let secondNum = Number(num1[1]);
    let threeNum = Number(num1[2]);
    let fourNum = Number(num1[3]);

    let firstNum2 = Number(num2[0]);
    let secondNum2 = Number(num2[1]);
    let threeNum2 = Number(num2[2]);
    let fourNum2 = Number(num2[3])

    for (let a = firstNum; a <= firstNum2; a++) {
        for (let b = secondNum; b <= secondNum2; b++) {
            for (let c = threeNum; c <= threeNum2; c++) {
                for (let d = fourNum; d <= fourNum2; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        buff += `${a}${b}${c}${d} `;

                    }

                }
            }
        }
    }
    console.log(buff);
}
barcodeGenerator(["3256", "6579"]);