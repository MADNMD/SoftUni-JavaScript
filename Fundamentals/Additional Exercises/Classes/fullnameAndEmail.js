class Employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return`${this.firstName} ${this.lastName}`;
    }
    showEmail(){
        return `${this.firstName}.${this.lastName}@company.com`;
    }
    showFisrtName(){
        return `${this.firstName}`;
    }
}
let emp1 = new Employee('Nikola', 'Donchev');
emp1.fullName();
emp1.showEmail();
emp1.showFisrtName();
console.log(emp1.fullName());
console.log(emp1.showEmail());
console.log(emp1.showFisrtName());