function solution() {

    const recipes = {

        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    const stocks = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavour: 0,
    };

    const commands = {
        restock,
        prepare,
        report,
    };
    return manager;

    function manager(line) {
        const [command, product, quantity] = line.split(' ');
        return commands[command](product, quantity);
    }

    function restock(microElement, quantity) {
        stocks[microElement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let quantityMeals = Number(quantity);
        let order = Object.entries(recipes[recipe]);
        order.forEach(ingredient => ingredient[1] *= quantityMeals);

        for (let [microElement, quantity] of order) {

            if (stocks[microElement] < quantity) {
                return `Error: not enough ${microElement} in stock`;
            }
        }
        order.forEach(([microElement, quantity]) => {
            stocks[microElement] -= quantity;
        });
        return 'Success';
    }

    function report() {
        return `protein=${stocks.protein} carbohydrate=${stocks.carbohydrate} fat=${stocks.fat} flavour=${stocks.flavour}`;
    }                                     
}
let manager = solution();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report")); 

// console.log(manager("restock carbohydrate 10")); 
// console.log(manager("restock flavour 10")); 
// console.log(manager("prepare apple 1")); 
// console.log(manager("restock fat 10")); 
// console.log(manager("prepare burger 1")); 
// console.log(manager("report")); 

console.log(manager("prepare turkey 1")); 
console.log(manager("restock protein 10")); 
console.log(manager("prepare turkey 1")); 
console.log(manager("restock carbohydrate 10")); 
console.log(manager("prepare turkey 1")); 
console.log(manager("restock fat 10")); 
console.log(manager("prepare turkey 1")); 
console.log(manager("restock flavour 10")); 
console.log(manager("prepare turkey 1")); 
console.log(manager("report")); 