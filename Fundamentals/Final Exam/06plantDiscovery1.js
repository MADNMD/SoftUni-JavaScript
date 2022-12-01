function plantDiscovery(input) {

    const plantArray = input.slice();
    const numberOfPlants = Number(plantArray.shift());
    const plants = {};

    for (let i = 0; i < numberOfPlants; i++) {
        let [plant, rarity] = plantArray.shift().split('<->');
        rarity = Number(rarity);

        if (!plants[plant]) {
            plants[plant] = {
                rarity,
                rating: [],
            }
        } else {
            plants[plant].rarity = rarity;
        }
    }

    let line = plantArray.shift();

    while (line !== 'Exhibition') {
        let [command, plantInfo] = line.split(': ');

        if (command === 'Rate') {
            let [plant, rating] = plantInfo.split(' - ');
            rating = Number(rating);

            if (plants[plant]) {
                plants[plant].rating.push(rating);
            } else {
                console.log('error');
            }
        } else if (command === 'Update') {
            let [plant, newRarity] = plantInfo.split(' - ');
            newRarity = Number(newRarity);

            if (plants[plant]) {
                plants[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        } else if (command === 'Reset') {
            const plant = plantInfo;

            if (plants[plant]) {
                plants[plant].rating = [];
            } else {
                console.log('error');
            }
        }
        line = plantArray.shift();
    }

    for (let plant in plants) {
        let averageRating = 0;

        for (let currentRating of plants[plant].rating) {
            averageRating += currentRating;
        }
        averageRating /= plants[plant].rating.length;

        if (isNaN(averageRating)) {
            averageRating = 0;
        }
        plants[plant].rating = averageRating;
    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].rating.toFixed(2)}`);
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

    // plantDiscovery(["2",
    // "Candelabra<->10",
    // "Oahu<->10",
    // "Rate: Oahu - 7",
    // "Rate: Candelabra - 6",
    // "Exhibition"])
