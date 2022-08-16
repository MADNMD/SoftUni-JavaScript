function softUniReception(input){

    let allStudents = Number(input.pop());
    let employee1 = Number(input.shift());
    let employee2 = Number(input.shift());
    let employee3 = Number(input.shift());
    let workingHour = 0;
    let handleStudents = employee1 + employee2 + employee3;

    while(allStudents > 0){
        allStudents -= handleStudents;
        workingHour++;

        if(workingHour % 4 === 0){
            workingHour++;
        }
    }
    console.log(`Time needed: ${workingHour}h.`);
}
softUniReception(['1','2','3','45']);