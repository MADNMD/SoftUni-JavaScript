function gladiatorInventory(array) {

    let inventory = array.shift().split(' ');

    for (let elements of array) {
        let splitCommands = elements.split(' ');
        let command = splitCommands[0];

        if (command === 'Buy') {
            for (let i = 0; i < inventory.length; i++) {
                let currentInventory = inventory[i];
                if (splitCommands[1] === currentInventory) {
                    break;
                } else {
                    inventory.push(splitCommands[1]);
                    break;
                }
            }
        } else if (command === 'Trash') {
            let removeEquipment = splitCommands[1];
            inventory = inventory.filter(x => x !== removeEquipment);
        }
        else if (command === 'Repair') {
            let repairEquipment = splitCommands[1];
            let index = inventory.indexOf(repairEquipment);
            inventory.splice(index, 1);
            inventory.push(repairEquipment);
        }
        else if (command === 'Upgrade') {
            let upgradeElement = splitCommands[1].split('-');
            if (inventory.includes(upgradeElement[0])) {
                let index = inventory.indexOf(upgradeElement[0]);
                inventory.splice(index + 1, 0,`${upgradeElement[0]}:${upgradeElement[1]}`);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);