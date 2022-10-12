function easterEggsBattle(input) {

    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);
    index = 2;
    let command = input[index];

    while (command !== 'End') {
        let battle = input[index++];
        command = input[index];

        if (battle === 'one') {
            secondPlayer--;
            if (secondPlayer === 0) {
                console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
                break;
            }
        } else if (battle === 'two') {
            firstPlayer--;
            if (firstPlayer === 0) {
                console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
                break;
            }
        }
        // index++;
        // command = input[index];
    }
    if (command === 'End') {
        console.log(`Player one has ${firstPlayer} eggs left.`);
        console.log(`Player two has ${secondPlayer} eggs left.`);
    }
}
easterEggsBattle([5, 4, 'one', 'two', 'one', 'two', 'two', 'End']);