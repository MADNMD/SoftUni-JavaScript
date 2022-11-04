function schoolGrades(input) {

    const schoolBook = new Map();
    const schoolDiary = input;

    schoolDiary.forEach(line => {
        let [name, ...grades] = line.split(' ');

        if(!schoolBook.has(name)){
            schoolBook.set(name, grades);
        }else{
            const currentGrades = schoolBook.get(name);
            grades.forEach(grade => {
                currentGrades.push(grade);
            });
            schoolBook.set(name,currentGrades);
        }
    });
    const sortedName = Array.from(schoolBook);
    sortedName.sort((a, b) => a[0].localeCompare(b[0]));
    
    sortedName.forEach(student => {
        const avvGrade = student[1]
        .map(Number)
        .reduce((a, b) => a + b, 0) / student[1].length;
        console.log(`${student[0]}: ${avvGrade.toFixed(2)}`);
    });
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);



      // let schoolBook = new Map();
    // for (let line of input) {
    //     let tokens = line.split(' ');
    //     let name = tokens.shift();
    //     let grades = tokens.map(Number);
    //     if (!schoolBook.has(name)) {
    //         schoolBook.set(name, []);
    //     }
    //     let existsGrade = schoolBook.get(name);
    //     for (let grade of grades) {
    //         existsGrade.push(Number(grade));
    //     }
    // }
    // let sortedName = Array.from(schoolBook).sort((a, b) => a[0].localeCompare(b[0]));
    // for (let [name, grades] of sortedName) {
    //     let averageGrade = 0;
    //     for (let grade of grades) {
    //         averageGrade += grade;
    //     }
    //     averageGrade /= grades.length;
    //     console.log(`${name}: ${averageGrade.toFixed(2)}`);
    // }