function bonusScoringSystem(array) {

    let studentsNum = Number(array.shift());
    let lecturesNum = Number(array.shift());
    let additonalBonus = Number(array.shift());
    let arrayL = array.length;
    let maxBonus = 0;
    let currentPoints = 0;
    let attendances = 0;

    for (let i = 0; i < arrayL; i++) {
        let currentAttendances = Number(array[i]);
        currentPoints = currentAttendances / lecturesNum * (5 + additonalBonus);
        if (currentPoints > maxBonus) {
            maxBonus = currentPoints;
        }
        if (currentAttendances > attendances) {
            attendances = currentAttendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${attendances} lectures.`);
}
bonusScoringSystem(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18']);