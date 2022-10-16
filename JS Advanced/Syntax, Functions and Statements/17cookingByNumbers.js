function cookingByNumbers(num, str1, str2, str3, str4, str5) {

    let number = Number(num);
    let operations = [str1, str2, str3, str4, str5];
    let operationsL = operations.length

    for (let i = 0; i < operationsL; i++) {
        let currentOperations = operations[i];
        if (currentOperations === 'chop') {
            number /= 2;
            console.log(number);
        } else if (currentOperations === 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (currentOperations === 'spice') {
            number += 1;
            console.log(number);
        } else if (currentOperations === 'bake') {
            number *= 3;
            console.log(number);
        } else if (currentOperations === 'fillet') {
            number *= 0.8;
            console.log(number.toFixed(1));
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');