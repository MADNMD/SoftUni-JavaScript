function getPersons() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    const person = [];

    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    person.push(firstPerson);

    let secondPerson = new Person('SoftUni');
    person.push(secondPerson);

    let thridPerson = new Person('Stephan', 'Johnson', 25,);
    person.push(thridPerson);

    let fourPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    person.push(fourPerson);

    return person;
}
getPersons();