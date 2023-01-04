class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (name === '' || salary === '' || position === '' || department === '' ||
            name === undefined || salary === undefined || position === undefined || department === undefined ||
            name === null || salary === null || position === null || department === null || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                avrSalary: 0,
                sumSalary: 0,
                employees: [],
            }
        }
        this.departments[department].sumSalary += Number(salary);
        this.departments[department].employees.push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }


    bestDepartment() {

        for (let department in this.departments) {
            this.departments[department].avrSalary = (Number((this.departments[department].sumSalary / this.departments[department].employees.length)));
        }
        let bestDepartment = Object.entries(this.departments)
            .sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) => {
                return depInfoTwo.avrSalary - depInfoOne.avrSalary;
            })[0];
        let sortEmployees = bestDepartment[1].employees.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        })

        let result = `Best Department is: ${bestDepartment[0]}\n`;
        result += `Average salary: ${bestDepartment[1].avrSalary.toFixed(2)}\n`;


        for (let i = 0; i < sortEmployees.length; i++) {
            let employee = sortEmployees[i];
            result += `${employee.name} ${employee.salary} ${employee.position}`;
            result += i === sortEmployees.length - 1 ? '' : `\n`;
        }
        return result;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

