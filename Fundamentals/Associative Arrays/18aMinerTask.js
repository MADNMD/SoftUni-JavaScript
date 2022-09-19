function aMinerTask(mine) {

    let minerResource = {};
    let mineL = mine.length;

    for (let i = 0; i < mineL; i += 2) {
        let resource = mine[i];
        let quantity = Number(mine[i + 1]);
        if (!minerResource.hasOwnProperty(resource)) {
            minerResource[resource] = quantity;
        } else {
            minerResource[resource] += quantity;
        }
    }
    for (let resource in minerResource) {
        console.log(`${resource} -> ${minerResource[resource]}`);
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);