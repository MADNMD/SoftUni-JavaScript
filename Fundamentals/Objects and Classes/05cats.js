function cats(array){

    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age,
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }
    let cats = [];
 
    for(let currenString of array){
        let currenData = currenString.split(' ');
        let currentCat = new Cat(currenData[0], currenData[1]);
        cats.push(currentCat)
    }
    cats.forEach(c => c.meow());
}
cats(['Mellow 2', 'Tom 5']);