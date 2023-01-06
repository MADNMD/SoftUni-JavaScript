function personAndTeacher() {

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
    }
    return {
        Person,
        Teacher,
    }
}