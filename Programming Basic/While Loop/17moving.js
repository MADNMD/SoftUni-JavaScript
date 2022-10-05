function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let freeMeters = 0;
    let lackingMeters = 0;
    let allBox = 0;

    index = 3;
    command = input[index];

    let allSpace = width * length * hight;

    while (allSpace >= allBox) {
        let box = Number(input[index]);
        allBox += box;
        index++;
        command = input[index];

        if (command === 'Done') {
            console.log(`${allSpace - allBox} Cubic meters left.`);
        }
    }
    if (allSpace <= allBox) {
        console.log(`No more free space! You need ${Math.abs(allBox - allSpace)} Cubic meters more.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);