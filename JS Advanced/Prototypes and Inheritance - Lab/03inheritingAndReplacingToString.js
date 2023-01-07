function toStringExtension() {

    class Person {
        constructor(type, name, email) {
            this.type = type,
            this.name = name;
            this.email = email;
        }
        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super('Teacher', name, email);
            this.subject = subject;
        }
        toString() {
            return `${this.type} (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super('Student', name, email);
            this.course = course;
        }
        toString() {
            return `${this.type} (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student,
    }
}