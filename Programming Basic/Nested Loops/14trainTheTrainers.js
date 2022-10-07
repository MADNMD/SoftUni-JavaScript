function trainTheTrainers(input) {

    let n = Number(input[0]);
    index = 1;
    let command = input[index];
    let counter = 0;
    let sumGrade = 0;

    while (command !== 'Finish') {
        counter++
        let name = command;
        let tempSumGrade = 0;

        for (let i = 0; i < n; i++) {
            index++;
            let grade = Number(input[index]);
            tempSumGrade += grade;
        }
        let avrGrade = tempSumGrade / n;
        sumGrade += avrGrade;

        index++;
        command = input[index];

        console.log(`${name} - ${avrGrade.toFixed(2)}.`);
    }
    let allGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${allGrade.toFixed(2)}.`);
}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);