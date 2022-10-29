function coffeeLover(input) {

    let coffeeList = input.shift().split(' ');
    const countCommand = Number(input.shift());

    for (let i = 0; i < countCommand; i++) {
        let currentLine = input[i];
        let [command, ...data] = currentLine.split(' ');


        if (command === 'Include') {
            const typeOfCoffee = data[0];
            coffeeList.push(typeOfCoffee);

        } else if (command === 'Remove') {
            const firstOrLast = data[0];
            const removeCoffee = Number(data[1]);
            if (coffeeList.length > removeCoffee) {
                if (firstOrLast === 'first') {
                    coffeeList.splice(0, removeCoffee);
                } else if (firstOrLast === 'last') {
                    for (let i = 0; i < removeCoffee; i++) {
                        coffeeList.pop();
                    }
                }
            }
        } else if (command === 'Prefer') {
            const index1 = Number(data[0]);
            const index2 = Number(data[1]);
            if (coffeeList[index1] && coffeeList[index2]) {
                const temp = coffeeList[index1];
                coffeeList[index1] = coffeeList[index2];
                coffeeList[index2] = temp;
            }
        } else if (command === 'Reverse') {
            coffeeList = coffeeList.reverse();
        }
    }
    console.log('Coffees:');
    console.log(coffeeList.join(' '));
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"]);

// solve(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
//     "3",
//     "Include OrdinaryCoffee",
//     "Remove first 1",
//     "Prefer 4 1"]);

// solve(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
//     "5",
//     "Include OrdinaryCoffee",
//     "Remove first 1",
//     "Prefer 0 1",
//     "Prefer 3 1",
//     "Reverse"]);