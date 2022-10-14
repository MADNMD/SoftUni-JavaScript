function solve(array, str) {

    let numbers = array;
    const commands = str;

    for (let line of commands) {
        let [command, ...data] = line.split(' ');

        if (command === 'add') {
            const index = Number(data[0]);
            const element = Number(data[1]);
            numbers.splice(index, 0, element);
        } else if (command === 'addMany') {
            // const index = data[0];
            // data.splice(0,1);
            // let numberToAdd = data.map(Number);
            // numbers.splice(index,0, ...numberToAdd);
            const index = Number(data.shift());
            let dataL = data.length;
            for (let i = dataL - 1; i >= 0; i--) {
                let currentNumber = Number(data[i]);
                numbers.splice(index, 0, currentNumber);
            }
        } else if (command === 'contains') {
            const element = Number(data[0]);
            // let searchIndex = numbers.indexOf(element);
            // console.log(searchIndex);
            if (numbers.indexOf(element)) {
                console.log(numbers.indexOf(element));
            } else {
                console.log(numbers.indexOf(element));
            }
        } else if (command === 'remove') {
            const index = Number(data[0]);
            numbers.splice(index, 1);
        } else if (command === 'shift') {
            const position = data[0];
            for (let i = 0; i < position; i++) {
                const fisrtElement = numbers.shift();
                numbers.push(fisrtElement);
            }
        } else if (command === 'sumPairs') {
            let tempArr = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                tempArr.push(sum);
            }
            numbers = tempArr;
        }else if(command === 'print'){
            console.log(numbers);
        }
    }
}
solve(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
);
solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);