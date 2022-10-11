function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    let maxGoal = 0;
    let best = '';

    while (command !== 'END') {
        let playerName = input[index++];
        let goal = Number(input[index]);

        if (goal > maxGoal) {
            maxGoal = goal;
            best = playerName;
        }
        if (goal >= 10) {
            break;
        }
        index++;
        command = input[index];
    }
    console.log(`${best} is the best player!`);

    if (maxGoal >= 3) {
        console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoal} goals.`);
    }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);