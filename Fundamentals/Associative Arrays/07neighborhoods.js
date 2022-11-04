function neighborhoods(input) {

    const neighborhoodsList = input.shift().split(', ');
    const peopleInfo = {};
    const info = input;

    neighborhoodsList.forEach(neighborhood => {
        peopleInfo[neighborhood] = [];
    });

    info.forEach(line => {
        let [neighborhood, name] = line.split(' - ');

        if (peopleInfo[neighborhood]) {
            peopleInfo[neighborhood].push(name);
        }
    })

    const sortedByCountPeople = Object.entries(peopleInfo);
    sortedByCountPeople.sort((a, b) => b[1].length - a[1].length);

    sortedByCountPeople.forEach(currentNeighbirhood => {
        console.log(`${currentNeighbirhood}: ${currentNeighbirhood[1].length}`);
        currentNeighbirhood[1].forEach(people => {
            console.log(`--${people}`);
        });
    });
}
neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);
