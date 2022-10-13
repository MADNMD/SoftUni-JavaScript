function suitcasesLoad(input) {

    let capacity = Number(input[0]);
    let counter = 0;
    let luggage = 0

    let index = 1;
    let command = input[index];

    while (command !== 'End') {
        luggage = Number(input[index]);
        counter++;

        if (counter % 3 === 0) {
            luggage *= 1.1;
        }

        if (capacity < luggage) {
            counter--;
            console.log("No more space!");
            break;
        }
        capacity -= luggage;

        index++;
        command = input[index];
    }
    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${counter} suitcases loaded.`);
}
suitcasesLoad(["550", "100", "252", "72", "End"]);