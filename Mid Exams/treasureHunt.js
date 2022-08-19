function treasureHunt(array) {

    let treasure = array.shift().split('|');

    for (const elements of array) {
        let tokens = elements.split(' ');
        let command = tokens.shift();

        if (command === 'Loot') {
            for (let i = 0; i < tokens.length; i++) {
                let currentItem = tokens[i];
                let index = treasure.indexOf(currentItem);
                if (index === -1) {
                    treasure.unshift(currentItem);
                }
            }
        }
        else if (command === 'Drop') {
            let index = Number(tokens);
            if (index >= 0 && index < treasure.length) {
                treasure.push(treasure.splice(index, 1));
            }
        }
        else if (command === 'Steal') {
            let count = Math.min(treasure.length, Number(tokens.shift()));
            let index = treasure.length - count;
            let stolen = treasure.splice(index, count);
            console.log(stolen.join(', '));
        }
        else if (command === 'Yohoho!') {
            //console.log(stealItems.join(', '));
        }
    }
    if (treasure.length) {
        let averegeTreasure = treasure.reduce((prevSum, item) => prevSum + item.length, 0) / treasure.length;
        console.log(`Average treasure gain: ${averegeTreasure.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);