function pirates(input) {

    let towns = {};
    let townsInfo = input.shift();

    while (townsInfo !== 'Sail') {
        let [town, population, gold] = townsInfo.split('||');
        population = Number(population);
        gold = Number(gold);
        if (towns.hasOwnProperty(town)) {
            towns[town].population += population;
            towns[town].gold += gold;
        } else {
            towns[town] = { population, gold };
        }
        townsInfo = input.shift();
    }
    let tokens = input.shift();

    while (tokens !== 'End') {
        let [command, ...data] = tokens.split('=>');

        if (command === 'Plunder') {
            let town = data[0];
            let population = Number(data[1]);
            let gold = Number(data[2]);
            if (towns.hasOwnProperty(town)) {
                let currentPopulation = towns[town].population;
                let currentGold = towns[town].gold;
                currentPopulation -= population;
                currentGold -= gold;
                towns[town].population = currentPopulation;
                towns[town].gold = currentGold;
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                if (currentPopulation <= 0 || currentGold <= 0) {
                    delete towns[town];
                    console.log(`${town} has been wiped off the map!`);
                }
            }
        } else if (command === 'Prosper') {
            let town = data[0];
            let gold = Number(data[1]);
            let currentGold = towns[town].gold;
            if (towns.hasOwnProperty(town)) {
                if (gold < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${currentGold + gold} gold.`);
                    currentGold += gold;
                    towns[town].gold = currentGold;
                }
            }
        }
        tokens = input.shift();
    }

    let count = Object.keys(towns);
    
    if (count.length !== 0) {
        console.log(`Ahoy, Captain! There are ${count.length} wealthy settlements to go to:`);
        for (let town in towns) {
            console.log(`${town} -> Population: ${towns[town].population} citizens, Gold: ${towns[town].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

// pirates([
//     "Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"]);
