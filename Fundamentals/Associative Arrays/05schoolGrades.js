function schoolGrades(input) {

    let schoolDiary = {};
    for (let info of input) {
        let [name, ...grades] = info.split(' ');
        if (!schoolDiary.hasOwnProperty(name)) {
            schoolDiary[name] = [];
        }
        let existsGrade = schoolDiary[name];
        for (let grade of grades) {
            existsGrade.push(Number(grade));
        }
    }
    let key = Object.keys(schoolDiary);
    let sortedName = key.sort((a, b) => a.localeCompare(b));
    for (let name of sortedName) {
        let average = schoolDiary[name].reduce((a, b) => a + b, 0) / schoolDiary[name].length;
        console.log(`${name}: ${average.toFixed(2)}`);
        //console.log(`${name}: ${schoolDiary[name]}`);
    }
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