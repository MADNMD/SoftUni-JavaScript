function cake(input) {

    let length = 0;
    let width = 0;
    let index = 0;
    let command = input[index];

    length = Number(input[index]);
    index++;
    width = Number(input[index]);
    index++;
    let wholeCake = length * width;
    let counterPices = 0;

    while (counterPices >= 0) {

        if (command === 'STOP') {
            console.log(`${counterPices} pieces are left.`);
            break;
        }
        counterPices = wholeCake -= Number(input[index]);
        index++;
        command = input[index];
    }
    if (counterPices < 0) {
        console.log(`No more cake left! You need ${Math.abs(counterPices)} pieces more.`);
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);