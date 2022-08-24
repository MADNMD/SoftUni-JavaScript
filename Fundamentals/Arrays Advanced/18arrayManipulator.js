function arrayManipulator(arrayNumber, ArrayCommands) {

    for (let elements of ArrayCommands) {
        let splitCommand = elements.split(' ');
        let command = splitCommand[0];
        switch (command) {
            case 'add':
                let index = Number(splitCommand[1]);
                let el = Number(splitCommand[2]);
                arrayNumber.splice(index, 0, el);
                break;
            case 'addMany':
                let indexFromNumber = splitCommand[1];
                splitCommand.splice(0, 2);
                let numberToAdd = splitCommand.map(Number);
                arrayNumber.splice(indexFromNumber, 0, ...numberToAdd);
                break;
            case 'contains':
                let element = Number(splitCommand[1]);
                let searchIndex = arrayNumber.indexOf(element);
                console.log(searchIndex);
                break;
            case 'remove':
                let removeIndex = Number(splitCommand[1]);
                arrayNumber.splice(removeIndex, 1);
                break;
            case 'shift':
                let shiftElement = Number(splitCommand[1]);
                for (let i = 0; i < shiftElement; i++) {
                    let firstElement = arrayNumber.shift();
                    arrayNumber.push(firstElement);
                }
                break;
            case 'sumPairs':
                let tempArr = [];
                if (arrayNumber.length % 2 !== 0) {
                    arrayNumber.push(0);
                }
                for (let i = 0; i < arrayNumber.length - 1; i += 2) {
                    let sum = arrayNumber[i] + arrayNumber[i + 1];
                    tempArr.push(sum);
                }
                arrayNumber = tempArr;
                break;
            case 'print':
                console.log(`[ ${arrayNumber.join(', ')} ]`);
                break;
        }
    }
}
arrayManipulator([2, 2, 4, 2, 4]
["add 1 4", "sumPairs", "print"]);