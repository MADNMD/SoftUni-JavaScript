function manOfWar(input) {

    let pirateShips = input.shift().split('>').map(Number);
    let warShips = input.shift().split('>').map(Number);
    const maxHealth = Number(input.shift());

    let line = input.shift();

    while (line !== 'Retire') {

        let [command, ...data] = line.split(' ');

        if (command === 'Fire') {
            const index = Number(data[0]);
            const damage = Number(data[1]);

            if (warShips[index]) {
                warShips[index] -= damage;
                if (warShips[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command === 'Defend') {
            const startIndex = Number(data[0]);
            const endIndex = Number(data[1]);
            const damage = Number(data[2]);

            if (pirateShips[startIndex] && pirateShips[endIndex]) {
                for (let i = startIndex; i < endIndex + 1; i++) {
                    pirateShips[i] -= damage;
                    if (pirateShips[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            const index = Number(data[0]);
            const health = Number(data[1]);

            if (pirateShips[index]) {
                pirateShips[index] += health;
                if (pirateShips[index] > maxHealth) {
                    pirateShips[index] = maxHealth;
                }
            }
        } else if (command === 'Status') {
            const needeRepair = maxHealth / 5;
            let count = 0;
            for (let ship of pirateShips) {
                if (needeRepair > ship) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
        line = input.shift();
    }
    const pirateShipSum = pirateShips.reduce((a, b) => a + b, 0);
    const warshipSum = warShips.reduce((a, b) => a + b, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}
// manOfWar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]);

manOfWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);    
