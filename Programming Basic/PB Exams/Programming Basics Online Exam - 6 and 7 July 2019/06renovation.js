function renovation(input) {

    let height = Number(input[0]);
    let width = Number(input[1]);
    let percentNotPain = Number(input[2]);

    let index = 3;
    let command = input[index];

    let allArea = height * width * 4;
    let wallsForPain = allArea - (allArea * percentNotPain / 100);

    while (command !== 'Tired!') {
        let litersPain = Number(input[index]);

        wallsForPain -= litersPain;

        if (wallsForPain < 0) {
            console.log(`All walls are painted and you have ${Math.abs(wallsForPain)} l paint left!`);
            break;
        }
        if (wallsForPain === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }

        index++;
        command = input[index];

    }
    if (command === 'Tired!') {
        console.log(`${Math.ceil(wallsForPain)} quadratic m left.`);
    }
}
renovation([
    "3",
    "5",
    "10",
    "2",
    "3",
    "4",
    "Tired!"]);