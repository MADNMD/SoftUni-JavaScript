function inventory(array) {

    let myInventory = array.shift().split(', ');

    for (const elements of array) {
        let tokens = elements.split(' - ');
        let command = tokens[0];

        if (command === 'Collect') {
            let item = tokens[1];
            if (!myInventory.includes(item)) {
                myInventory.push(item);
            }
        } else if (command === 'Drop') {
            let item = tokens[1];
            let index = myInventory.indexOf(item);
            if (myInventory.includes(item)) {
                myInventory.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            let splitTokens = tokens[1].split(':');
            let oldItem = splitTokens[0];
            let newItem = splitTokens[1];
            let indexOnOldItem = myInventory.indexOf(oldItem);
            if (myInventory.includes(oldItem)) {
                myInventory.splice(indexOnOldItem + 1, 0, newItem);
            }
        } else if (command === 'Renew') {
            let item = tokens[1];
            let index = myInventory.indexOf(item);
            if (myInventory.includes(item)) {
                myInventory.splice(index, 1);
            }
            myInventory.push(item);
        } else if (command === 'Craft!') {
            console.log(myInventory.join(', '));
        }
    }
}
inventory([
    'Iron, Sword',
     'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);