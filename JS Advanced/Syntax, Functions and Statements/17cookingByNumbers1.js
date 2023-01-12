function solve(num, str1, str2, str3, str4, str5) {

    let number = Number(num);
    let operations = [str1, str2, str3, str4, str5];
    let operationsL = operations.length;

    let chop = function () {
        return number /= 2;
    };
    let dice = function () {
        return number = Math.sqrt(number);
    };
    let spice = function () {
        return number += 1;
    };
    let bake = function () {
        return number *= 3;
    };
    let fillet = function () {
        return number *= 0.80;
    };

    for (let i = 0; i < operationsL; i++) {
        let currentOperations = operations[i];
        switch (currentOperations) {
            case 'chop':console.log(chop(currentOperations));break;
            case 'dice':console.log(dice(currentOperations));break;
            case 'spice':console.log(spice(currentOperations));break;
            case 'bake':console.log(bake(currentOperations));break;
            case 'fillet':console.log(fillet(currentOperations));break;
        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');