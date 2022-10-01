function whichGenerationAreYou(num, gander) {

    let generations = {
        '-3': { m: 'great grandfather', f: `great grandmother` },
        '-2': { m: 'grandfather', f: 'grandmother' },
        '-1': { m: 'father', f: 'mother' },
        0: { m: 'me!', f: 'me!' },
        1: { m: 'son', f: 'daughte' },
        2: { m: 'grandson', f: 'granddaughte' },
        3: { m: 'great grandson', f: 'great granddaughte' },
    }
    console.log(generations[num][gander]);



    // if (num === -3 && gander === 'm') {
    //     console.log('great grandfather');
    // } else if (num === -2 && gander === 'm') {
    //     console.log('grandfather');
    // } else if (num === -1 && gander === 'm') {
    //     console.log('father');
    // } else if (num === -0 && gander === 'm') {
    //     console.log('me!');
    // } else if (num === 1 && gander === 'm') {
    //     console.log('son');
    // } else if (num === 2 && gander === 'm') {
    //     console.log(`grandson`);
    // } else if (num === 3 && gander === 'm') {
    //     console.log(`great grandson`);
    // } else if (num === -3 && gander === 'f') {
    //     console.log(`great grandmother`);
    // } else if (num === -2 && gander === 'f') {
    //     console.log(`grandmother`);
    // } else if (num === -1 && gander === 'f') {
    //     console.log(`mother`);
    // } else if (num === 0 && gander === 'f') {
    //     console.log(`me!`);
    // } else if (num === 1 && gander === 'f') {
    //     console.log(`daughte`);
    // } else if (num === 2 && gander === 'f') {
    //     console.log(`granddaughte`);
    // } else if (num === 3 && gander === 'f') {
    //     console.log(`great granddaughte`);
    // }

}
whichGenerationAreYou(2, "f");