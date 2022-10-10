function bestPlayer(input) {

    let people = Number(input[0]);
    let workOutCounter = 0;
    let proteinCounter = 0;
    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;

    for (let i = 1; i <= + people; i++) {
        let activity = input[i];

        switch (activity) {
            case 'Back':
                workOutCounter++;
                backCounter++;
                break;
            case 'Chest':
                workOutCounter++;
                chestCounter++;
                break;
            case 'Legs':
                workOutCounter++;
                legsCounter++;
                break;
            case 'Abs':
                workOutCounter++;
                absCounter++;
                break;
            case 'Protein shake':
                proteinCounter++;
                proteinShakeCounter++;
                break;
            case 'Protein bar':
                proteinCounter++;
                proteinBarCounter++;
                break;
        }
    }
    let allPeopleTraining = workOutCounter / people * 100;
    let allPeopleProduct = proteinCounter / people * 100;

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);
    console.log(`${allPeopleTraining.toFixed(2)}% - work out`);
    console.log(`${allPeopleProduct.toFixed(2)}% - protein`);
}
fitnessCenter([
    "10", "Back", "Chest", "Legs", "Abs", "Protein shake",
    "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);