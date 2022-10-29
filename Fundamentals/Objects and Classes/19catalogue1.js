function solve(input) {

    const orderLsit = [];
    const catalogue = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        let firstChar = product[0];

        if (!orderLsit.includes(firstChar)) {
            orderLsit.push(firstChar);
        }
        catalogue[product] = price;
    }
    orderLsit.sort((a, b) => a.localeCompare(b));
    const keys = Object.keys(catalogue);
    keys.sort((a, b) => a.localeCompare(b));
    for (let letter of orderLsit) {
        console.log(letter);
        for (let key of keys) {
            if (key[0] === letter) {
                console.log(`  ${key}: ${catalogue[key]}`);
            }
        }
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);