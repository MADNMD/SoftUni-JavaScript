function plantDiscovery(input) {
    let numberPlants = Number(input.shift());
    let store = {};

    for (let i = 0; i < numberPlants; i++) {
        let typePlants = input.shift();
        let [plants, rarity] = typePlants.split('<->');
        rarity = Number(rarity);
        store[plants] = { rarity, raiting: [] };
    }

    let line = input.shift();

    while (line !== 'Exhibition') {
        let [command, ...rest] = line.split(': ');
        let [plant, data] = rest[0].split(' - ');
        if (store.hasOwnProperty(plant)) {
            switch (command) {
                case 'Rate':
                    let raiting = Number(data);
                    store[plant].raiting.push(raiting);
                    break;
                case 'Update':
                    let newRarity = Number(data);
                    store[plant].rarity = newRarity;
                    break;
                case 'Reset':
                    store[plant].raiting = [];
                    break;
                default:
                    console.log('error');
                    break;
            }
        } else {
            console.log('error');
        }
        line = input.shift();
    }
    console.log('Plants for the exhibition:');
    for (let plant in store) {
        console.log(`- ${plant}; Rarity: ${store[plant].rarity}; Rating: ${average(store[plant].raiting).toFixed(2)}`);
    }
    function average(arr) {
        if (!arr.length) {
            return 0;
        } else {
            return arr.reduce((a, b) => a + b, 0) / arr.length;
        }
    }
}
plantDiscovery([
    "3",
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