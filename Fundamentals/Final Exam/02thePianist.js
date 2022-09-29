function thePianist(input) {
    let numberOfpieces = Number(input.shift());
    let catalog = {};

    for (let i = 0; i < numberOfpieces; i++) {
        let [name, composer, key] = input.shift().split('|');
        catalog[name] = {
            composer,
            key,
        }
    }

    while (input[0] !== 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];
        if (command === 'Add') {
            if (catalog.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3],
                }
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (catalog.hasOwnProperty(name)) {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            if (catalog.hasOwnProperty(name)) {
                catalog[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }
    let arrayOfCatalog = Object.entries(catalog);
    for (let [nameOfSong, info] of arrayOfCatalog) {
        console.log(`${nameOfSong} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);