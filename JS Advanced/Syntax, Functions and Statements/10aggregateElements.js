function aggregateElements(arrayNumbers) {

    const sumAllElements = function (numbers) {
        numbers = numbers.reduce((a, b) => a + b, 0);
        return numbers;
    }
    const sumInverseValues = function (numbers) {
        // the inverse of a number A is 1/A;
        let sum = 0;
        numbers.forEach(number => {
            sum += 1 / number;
        });
        return sum;
    }
    const concatAlElements = function (numbers) {
        let numberAsString = numbers.map(String);
        numberAsString = numberAsString.reduce((a, b) => a + b);
        return numberAsString;
    }
    const sum = sumAllElements(arrayNumbers);
    const sumInverse = sumInverseValues(arrayNumbers);
    const concat = concatAlElements(arrayNumbers);
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}
aggregateElements([2, 4, 8, 16]);