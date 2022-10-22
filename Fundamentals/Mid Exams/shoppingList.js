function shoppingList(array) {

    let listOfProducts = array.shift().split('!');

    for (const elements of array) {
        let splitCommand = elements.split(' ');
        let command = splitCommand[0];

        if (command === 'Urgent') {
            let product = splitCommand[1];
            if (!listOfProducts.includes(product)) {
                listOfProducts.splice(0, 0, product);
            }
        } else if (command === 'Unnecessary') {
            let product = splitCommand[1];
            let index = listOfProducts.indexOf(product);
            if (listOfProducts.includes(product)) {
                listOfProducts.splice(index, 1);
            }
        } else if (command === 'Correct') {
            let oldProduct = splitCommand[1];
            let newProduct = splitCommand[2];
            let index = listOfProducts.indexOf(oldProduct);
            if (listOfProducts.includes(oldProduct)) {
                listOfProducts.splice(index, 1, newProduct);
            }
        } else if (command === 'Rearrange') {
            let product = splitCommand[1];
            let index = listOfProducts.indexOf(product);
            if (listOfProducts.includes(product)) {
                listOfProducts.splice(index, 1);
                listOfProducts.push(product);
            }
        } else if (elements === 'Go Shopping!') {
            console.log(listOfProducts.join(', '));
        }
    }
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
;
