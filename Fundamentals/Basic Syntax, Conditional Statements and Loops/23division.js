function division(number) {
    let divisionNumber = 0;
    if (number % 10 === 0) {
        divisionNumber = 10;
    } else if (number % 7 === 0) {
        divisionNumber = 7;
    } else if (number % 6 === 0) {
        divisionNumber = 6;
    } else if (number % 3 === 0) {
        divisionNumber = 3;
    } else if (number % 2 === 0) {
        divisionNumber = 2;
    }
    if (divisionNumber > 0) {
        console.log(`The number is divisible by ${divisionNumber}`);
    } else {
        console.log('Not divisible');
    }
}
division(30);