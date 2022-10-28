function solve(input) {

    let time = 0;
    const employee1 = Number(input.shift());
    const employee2 = Number(input.shift());
    const employee3 = Number(input.shift());
    let studentCount = Number(input.shift());

    while (studentCount > 0) {
        time++;
        if (studentCount > 0) {
            studentCount -= employee1;
            if (studentCount > 0) {
                studentCount -= employee2;
                if (studentCount > 0) {
                    studentCount -= employee3;
                }
            }
        }
        if (time % 4 === 0) {
            time++;
        }
    }
    console.log(`Time needed: ${time}h.`);
}
solve(['5', '6', '4', '20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);