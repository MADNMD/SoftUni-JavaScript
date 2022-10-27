function manOWar(array) {
    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(x => Number(x));
    let maximumHealth = Number(array.shift());

    while (array[0] !== 'Retire') {
        let tokens = array.shift().split(' ');
        let command = tokens.shift();

        if (command === 'Fire') {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);
            if (index >= 0 && index <= warShip.length - 1) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if (startIndex >= 0 && startIndex <= pirateShip.length - 1 && endIndex >= 0 && endIndex <= pirateShip.length - 1) {
                for (let i = endIndex; i >= startIndex; i--) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            let index = Number(tokens[0]);
            let givenHealth = Number(tokens[1]);
            if (index >= 0 && index <= pirateShip.length - 1) {
                pirateShip[index] += givenHealth;
                if (pirateShip[index] > maximumHealth) {
                    pirateShip[index] = maximumHealth;
                }
            }
        } else if (command === 'Status') {
            let count = 0;
            let percentHealth = maximumHealth * 0.2;
            for (let i = 0; i < pirateShip.length; i++) {
                let currentShip = pirateShip[i];
                if (currentShip < percentHealth) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
   const pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    const warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);