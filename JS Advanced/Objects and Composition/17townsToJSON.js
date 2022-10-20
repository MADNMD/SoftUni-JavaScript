function townsToJSON(input) {

    const inputL = input.length;
    const townInfo = [];

    for (let i = 1; i < inputL; i++) {
        let [town, latitude, longitude] = input[i]
            .split('|')
            .filter(x => x.length > 0)
            .map(x => x.trim());
        townInfo.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        });
    }
    const result = JSON.stringify(townInfo);
    console.log(result);
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
// townsToJSON(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']);