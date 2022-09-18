function companyUsers(input) {

    let companyEmployees = {};

    for (let line of input) {
        let [company, employees] = line.split(' -> ');
        if (!companyEmployees.hasOwnProperty(company)) {
            companyEmployees[company] = [];
            companyEmployees[company].push(employees);
        } else {
            if (!companyEmployees[company].includes(employees)) {
                companyEmployees[company].push(employees);
            }
        }
    }
    let entries = Object.entries(companyEmployees);
    let sortedCompany = entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let company of sortedCompany) {
        console.log(company[0]);
        for (let employees of company[1]) {
            console.log(`-- ${employees}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);