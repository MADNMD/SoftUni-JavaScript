function examPreparation(input) {

    let numPoorGrade = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++
    let badGrade = 0;
    let goodGrade = 0;
    let sumGreade = 0;
    let lastTask = "";
    let countTasks = 0;
    let finGrade = 0;

    while (command !== 'Enough') {
        command = input[index];
        index++

        let grade = Number(command);
        sumGreade += grade;
        countTasks++

        if (grade <= 4) {
            badGrade++
        } else if (grade > 4) {
            goodGrade++
        }

        if (badGrade >= numPoorGrade) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            break;
        }

        finGrade = sumGreade / countTasks;
        lastTask = input[index - 2];
        command = input[index];
        index++;
    }
    if (command === 'Enough') {
        console.log(`Average score: ${finGrade.toFixed(2)}`);
        console.log(`Number of problems: ${countTasks}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);