function travelTime(input) {

    let travelInfo = {};
    
    for (let lines of input) {
        let [country, town, travelCost] = lines.split(' > ');
        if (!travelInfo.hasOwnProperty(country)) {
            travelInfo[country] = {};
        }
        if (!travelInfo[country].hasOwnProperty(town)) {
            travelInfo[country][town] = Number(travelCost);
        }
        if (travelInfo[country][town] > Number(travelCost)) {
            travelInfo[country][town] = Number(travelCost);
        }
    }
    let country = Object.keys(travelInfo);
    let sortedCountry = country.sort((a, b) => {
        return a.localeCompare(b);
    });
    for (let currentCountry of sortedCountry) {
        let entries = Object.entries(travelInfo[currentCountry]);
        let sortedTowns = entries.sort((a, b) => {
            return a[1] - b[1];
        });
        let finalCostTrip = [];
        for (let town of sortedTowns) {
            finalCostTrip.push(town.join(' -> '));
        }
        console.log(`${currentCountry} -> ${finalCostTrip.join(' ')}`);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);