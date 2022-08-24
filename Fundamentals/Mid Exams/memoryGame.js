function memoryGame(array) {
    let sequenceNums = array.shift().split(' ');
    let moves = 0;
    let addIndex;

    while (array[0] !== 'end') {
        moves++;
        let command = array.shift().split(' ').map(Number);
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);

        if (index1 === index2 || index1 < 0 || index1 >= sequenceNums.length || index2 < 0 || index2 >= sequenceNums.length) {
            addIndex = `-${moves}a`;
            let middleSequence = sequenceNums.length / 2;
            sequenceNums.splice(middleSequence, 0, addIndex, addIndex);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequenceNums[index1] === sequenceNums[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequenceNums[index1]}!`);
            sequenceNums.splice(index1, 1);
            if (index2 <= 0) {
                sequenceNums.splice(index2, 1)
            } else {
                sequenceNums.splice(index2 - 1, 1);
            }
        } else if (sequenceNums[index1] !== sequenceNums[index2]) {
            console.log("Try again!");
        }
        if (sequenceNums.length === 0 || sequenceNums.length === 1) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        if (array[0] === 'end' && sequenceNums.length > 0) {
            console.log("Sorry you lose :(");
            console.log(sequenceNums.join(' '));
        }
    }
}
memoryGame(["a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"]);