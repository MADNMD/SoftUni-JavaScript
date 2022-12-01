function thePianist(input) {

    const arrayInput = input.slice();
    const numberOfPieces = Number(arrayInput.shift());
    const pieces = {};

    for (let i = 0; i < numberOfPieces; i++) {

        let [piece, composer, key] = arrayInput.shift().split('|');

        if (!pieces[piece]) {
            pieces[piece] = {
                composer,
                key,
            };
        }
    }

    let line = arrayInput.shift();

    while (line !== 'Stop') {

        let [command, ...data] = line.split('|');

        if (command === 'Add') {
            const piece = data[0];
            const composer = data[1];
            const key = data[2];

            if (!pieces[piece]) {
                pieces[piece] = {
                    composer,
                    key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            const piece = data[0];

            if (pieces[piece]) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            const piece = data[0];
            const newKey = data[1];

            if (pieces[piece]) {
                pieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        line = arrayInput.shift();
    }
    for (let piece in pieces) {
        console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
    }
}
// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop']);

    thePianist([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop']);