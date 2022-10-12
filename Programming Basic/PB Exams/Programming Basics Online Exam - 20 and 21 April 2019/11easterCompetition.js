function easterCompetition(input) {

    let index = 0;
    let bread = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let points = 0;
    let localPoints = 0;
    let nameChef = '';
    // let counter = 0;
    let bestPoints = 0;

    for (let i = 1; i <= bread; i++) {
        //counter++;
        points = 0;
        let chef = command;
        command = input[index];
        index++;

        while (command !== 'Stop') {
            localPoints = Number(command);
            points += localPoints;

            command = input[index];
            index++;
        }
        console.log(`${chef} has ${points} points.`);

        if (points > bestPoints) {
            bestPoints = points;
            nameChef = chef;
            console.log(`${nameChef} is the new number 1!`);
        }
        command = input[index];
        index++;
    }
    console.log(`${nameChef} won competition with ${bestPoints} points!`);
}
easterCompetition([
    "3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8",
    "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]);