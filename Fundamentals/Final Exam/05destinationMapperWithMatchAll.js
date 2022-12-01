function destinationMapper(input) {

    const pattern = /([=|/])(?<cities>[A-Z][A-Za-z]{2,})\1/g;
    const destination = [];
    let points = 0;

    let match = input.matchAll(pattern);

    for (let line of match) {
        points += line.groups.cities.length;
        destination.push(line.groups.cities);
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
//destinationMapper("ThisIs some InvalidInput");