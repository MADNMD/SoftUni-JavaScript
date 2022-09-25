function printAndSum(firstNumber, secondNumber) {
    let sum = 0;
    let buff = '';
    //let numbers = [];
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
        buff += `${i} `
        //numbers.push(i);
    }
    console.log(buff);
    // console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);