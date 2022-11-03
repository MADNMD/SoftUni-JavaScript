function schoolGrades(input) {

    const studentsList = {};
    const schoolDiary = input;

    schoolDiary.forEach(line => {
        let [name, ...grades] = line.split(' ');

        if (!studentsList[name]) {
            studentsList[name] = grades;
        } else {
            grades.forEach(grade => {
                studentsList[name].push(grade);
            });
        }
    });
    const sortedByName = Object.keys(studentsList);
    sortedByName.sort((a, b) => a.localeCompare(b));

    sortedByName.forEach(student => {
        const avvGrade = studentsList[student]
            .map(Number)
            .reduce((a, b) => a + b, 0) / studentsList[student].length;
        console.log(`${student}: ${avvGrade.toFixed(2)}`);
    });
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
