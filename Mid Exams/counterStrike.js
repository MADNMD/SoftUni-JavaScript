function counterStrike(array) {

    let health = Number(array.shift());
    let countBattle = 0;

    for (const commands of array) {
        if (commands !== 'End of battle') {
            let energy = Number(commands);
            if (health - energy < 0) {
                console.log(`Not enough energy! Game ends with ${countBattle} won battles and ${health} energy`);
            }
            health -= energy;
            countBattle++;
        }else {
            console.log(`Won battles: ${countBattle}. Energy left: ${health}`);
        }
        if(countBattle % 3 === 0){
            health += countBattle;
        }
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);