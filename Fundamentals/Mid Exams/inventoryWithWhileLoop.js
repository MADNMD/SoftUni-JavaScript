function solve(input) {

    let inventory = input.shift().split(', ');

    let line = input.shift();

    while (line !== 'Craft!') {
        let [command, item] = line.split(' - ');

        if (command === 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command === 'Drop') {
            if (inventory.includes(item)) {
                inventory = inventory.filter(element => element !== item);
            }
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (inventory.includes(oldItem)) {
                const index = inventory.indexOf(oldItem);
                inventory.splice(index + 1, 0, newItem);
            }
        } else if (command === 'Renew') {
            if (inventory.includes(item)) {
                const index = inventory.indexOf(item);
                inventory.splice(index, 1);
                inventory.push(item);
            }
        }
        line = input.shift();
    }
    console.log(inventory.join(', '));
}
solve(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);

solve(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!']);