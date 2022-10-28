function solve(input) {

    const top5 = 5
    const numbers = input
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);
    const numbersL = numbers.length;
    const sumAllNumbers = numbers.reduce((a, b) => a + b, 0);
    const averageNum = sumAllNumbers / numbersL;
    const finalResult = [];

    for (let i = 0; i < top5; i++) {
        let currentNumber = numbers[i];
        if (currentNumber > averageNum) {
            finalResult.push(currentNumber);
        }
    }
    if (finalResult.length === 0) {
        console.log('No');
    } else {
        console.log(finalResult.join(' '));
    }
}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('-1 -2 -3 -4 -5 -6');
solve('10 20 30 40 50');
solve('1');