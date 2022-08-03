function simpleCalculator(firstNum, secondNum, operator) {

    let multiply = () => firstNum * secondNum;
    let divide = () => firstNum / secondNum;
    let add = () => firstNum + secondNum;
    let subtract = () => firstNum - secondNum;

    let result = 0;

    switch (operator) {
        case 'multiply': result = multiply(); break;
        case 'divide': result = divide(); break;
        case 'add': result = add(); break;
        case 'subtract': result = subtract(); break;
    }
    console.log(result);
}
simpleCalculator(5, 5, 'multiply');



//-------------------------------------------------------------


// let result;

//     switch (operator) {
//         case 'multiply': result = (firstNum, secondNum) => firstNum * secondNum; break;
//         case 'divide': result = (firstNum,secondNum) => firstNum / secondNum; break;
//         case 'add': result = (firstNum,secondNum) => firstNum + secondNum; break;
//         case 'subtract': result = (firstNum,secondNum) => firstNum - secondNum; break;
//     }

//     console.log(result(firstNum, secondNum));