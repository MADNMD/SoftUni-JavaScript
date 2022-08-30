function dungeonestDark(input) {

    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let array = input.toString().split('|');
    for (let elements of array) {
        let rooms = elements.split('|');
        let [command, number] = rooms.shift().split(' ');
        roomCounter++;
        if (command === 'potion') {
            let addHealth = Number(number);
            let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
            console.log(`You healed for ${newHealth - health} hp.`);
            health = newHealth;
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += Number(number);
            console.log(`You found ${Number(number)} coins.`);
        } else {
            health -= Number(number);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);