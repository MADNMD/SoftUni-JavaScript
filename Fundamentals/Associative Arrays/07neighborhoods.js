function neighborhoods(input) {

    let listOfneighborhoods = {};

    let neighborHoods = input.shift().split(', ');
    for (let neighborHood of neighborHoods) {
        listOfneighborhoods[neighborHood] = [];
    }
    for (let lists of input) {
        let neighborhood = lists.split(' - ')[0];
        let person = lists.split(' - ')[1];
        if (neighborHoods.includes(neighborhood)) {
            listOfneighborhoods[neighborhood].push(person);
        }
    }
    let entries = Object.entries(listOfneighborhoods);
    let sorted = entries.sort((a, b) => b[1].length - a[1].length);
    for (let currentNeighborhoods of sorted) {
        console.log(`${currentNeighborhoods[0]}: ${currentNeighborhoods[1].length}`);
        for (let currentPerson of currentNeighborhoods[1]) {
            console.log(`--${currentPerson}`);
        }
    }
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);

    // let listOfneighborhoods = new Map();

    // let neighborHoods = input.shift().split(', ');
    // for (let neighborHood of neighborHoods) {
    //     listOfneighborhoods.set(neighborHood, []);
    // }
    // for (let lines of input) {
    //     let [neighborHood, people] = lines.split(' - ');
    //     if (listOfneighborhoods.has(neighborHood)) {
    //         listOfneighborhoods.get(neighborHood).push(people);
    //     }
    // }
    // let entires = Array.from(listOfneighborhoods);
    // let sorted = entires.sort((a, b) => b[1].length - a[1].length);
    // for (let currentNeighborhood of sorted) {
    //     console.log(`${currentNeighborhood[0]}: ${currentNeighborhood[1].length}`);
    //     for (let people of currentNeighborhood[1]) {
    //         console.log(`--${people}`);
    //     }
    // }