class Name{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }
    firstName(){
        return `${this.fName.charAt(0).toUpperCase() + this.fName.slice(1).toLowerCase()}`;
    }
    lastName(){
        return`${this.lName.charAt(0).toUpperCase() + this.lName.slice(1).toLowerCase()}`;
    }
    fullName(){
        return`${this.fName.charAt(0).toUpperCase() + this.fName.slice(1).toLowerCase()} ${this.lName.charAt(0).toUpperCase() + this.lName.slice(1).toLowerCase()}`;
    }
    initials(){
        return`${this.fName[0].toUpperCase()}${this.lName[0].toUpperCase()}`;
    }
}
let newName1 = new Name('nikola', 'donchev');
newName1.firstName();
newName1.lastName();
newName1.fullName();
newName1.initials();
console.log(newName1.firstName());
console.log(newName1.lastName());
console.log(newName1.fullName());
console.log(newName1.initials());