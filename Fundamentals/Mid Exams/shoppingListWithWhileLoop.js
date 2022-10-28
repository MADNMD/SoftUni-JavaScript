function solve(input) {

    let listOfProduct = input
        .shift()
        .split('!');

    let line = input.shift();

    while (line !== 'Go Shopping!') {
        let [command, ...products] = line.split(' ');

        if (command === 'Urgent') {
            const product = products[0];
            if (!listOfProduct.includes(product)) {
                listOfProduct.unshift(product);
            }
        } else if (command === 'Unnecessary') {
            const product = products[0];
            if (listOfProduct.includes(product)) {
                const index = listOfProduct.indexOf(product);
                listOfProduct.splice(index, 1);
            }
        } else if (command === 'Correct') {
            const oldProduct = products[0];
            const newProduct = products[1];
            if (listOfProduct.includes(oldProduct)) {
                const index = listOfProduct.indexOf(oldProduct);
                listOfProduct[index] = newProduct;
            }
        } else if (command === 'Rearrange') {
            const product = products[0];
            if (listOfProduct.includes(product)) {
                const index = listOfProduct.indexOf(product);
                listOfProduct.splice(index, 1);
                listOfProduct.push(product);
            }
        }
        line = input.shift();
    }
    console.log(listOfProduct.join(', '));
}
 solve([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

solve([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);    