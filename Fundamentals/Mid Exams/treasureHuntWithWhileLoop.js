function solve(input) {

    let treasureChest = input.shift().split('|');

    let tokens = input.shift();

    while (tokens !== 'Yohoho!') {

        let [command, ...data] = tokens.split(' ');

        if (command === 'Loot') {
            let items = data;
            for (let item of items) {
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            const index = Number(data[0]);
            if (treasureChest[index]) {
                const removeLoot = treasureChest.splice(index, 1)[0];
                treasureChest.push(removeLoot);
            }
        } else if (command === 'Steal') {
            const count = Math.min(treasureChest.length, Number(data[0]));
            const startingIndex = treasureChest.length - count;
            const removeIntems = treasureChest.splice(startingIndex, count);
            console.log(removeIntems.join(', '));

        }
        tokens = input.shift();
    }

    const treasureChestL = treasureChest.length;
    let sumByLength = 0;
    let averageGain = 0;

    if (treasureChestL === 0) {
        console.log("Failed treasure hunt.");
    } else {
        for (let loot of treasureChest) {
            sumByLength += loot.length;
        }
        averageGain = sumByLength / treasureChestL;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}
solve(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

// solve(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"]);    