class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        return `${this.name} is age ${this.age}`;
    }
    getHeigth() {
        return `${this.name} is ${this.height}cm`;
    }
    getWeigth() {
        return `${this.name} weigth ${this.weight}kg`;
    }
}
let player = new Player("David Jones", 25, 175, 75);
player.getAge(player);
player.getHeigth(player);
player.getWeigth(player);
console.log(player.getAge());
console.log(player.getHeigth());
console.log(player.getWeigth());