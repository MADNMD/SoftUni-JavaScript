// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     toString() {
//         let className = this.constructor.name;// Служебно свойство което е равно на името на класа като стринг;
//         return `${className} (name: ${this.name}, email: ${this.email})`;
//     }
// }

function extend(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
// extend(Person)
// let newPerson = new Person('Pesho', 'peshp@peshev.com');
// console.log(newPerson);