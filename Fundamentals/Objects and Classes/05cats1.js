function cats(input) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of input) {
        let [name, age] = line.split(' ');
        const newCat = new Cat(name, age)
        newCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);