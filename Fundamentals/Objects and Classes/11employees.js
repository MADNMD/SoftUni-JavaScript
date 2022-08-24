function employees(namesOnEmployees) {

    for(let singleName of namesOnEmployees){
        let personName = {
            name : singleName,
            personalNumber : singleName.length
        }
        console.log(`Name: ${personName.name} -- Personal Number: ${personName.personalNumber}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);