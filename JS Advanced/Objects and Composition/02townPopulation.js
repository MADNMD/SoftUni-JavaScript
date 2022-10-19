function townPopulation(array) {

    const townsRegistry = {};

    array.forEach(info => {
        let [town, population] = info.split(' <-> ');
        population = Number(population);

        if (!townsRegistry.hasOwnProperty(town)) {
            townsRegistry[town] = 0;
        }
        townsRegistry[town] += population;
    });
    for (let town in townsRegistry) {
        console.log(`${town} : ${townsRegistry[town]}`);
    }
}
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);