function arrayManipulations(array) {

    let manipulationArray = array.shift().split(' ').map(Number);
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add': add(firstNum); break;
            case 'Remove': remove(firstNum); break;
            case 'RemoveAt': removeAt(firstNum); break;
            case 'Insert': insert(firstNum, secondNum); break;
        }
    }
    function add(el) {
        manipulationArray.push(el);
    }
    function remove(num) {
        manipulationArray = manipulationArray.filter(el => el !== num);
    }
    function removeAt(index) {
        manipulationArray.splice(index, 1);
    }
    function insert(num, index) {
        manipulationArray.splice(index, 0, num);
    }
    console.log(manipulationArray.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);

    //------------------------------------------------------------

    // let manipulationArray = array.shift().split(' ').map(Number);
    // let arrayL = array.length;

    // for (let i = 0; i < arrayL; i++) {
    //     let tempArray = array[i].split(' ');
    //     let command = tempArray.shift();
    //     let firstNum = Number(tempArray.shift());
    //     let secondNum = Number(tempArray.shift());

    //     switch (command) {
    //         case 'Add':
    //             manipulationArray.push(firstNum);
    //             break;
    //         case 'Remove':
    //             manipulationArray = manipulationArray.filter(num => num !== firstNum);
    //             break;
    //         case 'RemoveAt':
    //             manipulationArray.splice(firstNum, 1);
    //             break;
    //         case 'Insert':
    //             manipulationArray.splice(secondNum,0,firstNum);
    //             break;
    //     }
    // }
    // console.log(manipulationArray.join(' '));