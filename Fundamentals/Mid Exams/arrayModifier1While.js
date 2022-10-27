function solve(input) {

    let modifyArray = input
        .shift()
        .split(' ')
        .map(Number);

    let line = input.shift();

    while (line !== 'end') {
        let [command, index1, index2] = line.split(' ');
        index1 = Number(index1);
        index2 = Number(index2);

        if (command === 'swap') {

            const firstElement = modifyArray[index1];
            const secondElement = modifyArray[index2];
            modifyArray.splice(index1, 1, secondElement);
            modifyArray.splice(index2, 1, firstElement);

        } else if (command === 'multiply') {

            const firstElement = modifyArray[index1];
            const secondElement = modifyArray[index2];
            const multiplyByTwoNumbers = firstElement * secondElement;
            modifyArray.splice(index1, 1, multiplyByTwoNumbers);

        } else if (command === 'decrease') {
            modifyArray = modifyArray.map(number => number - 1);
        }

        line = input.shift();
    }
    console.log(modifyArray.join(', '));
}
solve(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);