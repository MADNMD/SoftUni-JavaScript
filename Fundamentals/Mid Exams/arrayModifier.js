function arrayModifier(array) {

    let myArray = array.shift().split(' ').map(Number);
    for (let elements of array) {
        let splitElemet = elements.split(' ');
        let command = splitElemet[0];

        if (command === 'swap') {
            let index = Number(splitElemet[1]);
            let index2 = Number(splitElemet[2]);
            let swapNum = myArray[index];
            let swapNum2 = myArray[index2];
            myArray.splice(index2, 1, swapNum);
            myArray.splice(index, 1, swapNum2);
        }
        else if (command === 'multiply') {
            let index = Number(splitElemet[1]);
            let index2 = Number(splitElemet[2]);
            let multiplyNum = myArray[index];
            let multiplyNum2 = myArray[index2];
            let sum = multiplyNum * multiplyNum2;
            myArray.splice(index, 1, sum);
        }
        else if (command === 'decrease') {
            myArray = myArray.map(x => x - 1);
        }
        else if (command === 'end') {
            console.log(myArray.join(', '));
        }
    }
}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);