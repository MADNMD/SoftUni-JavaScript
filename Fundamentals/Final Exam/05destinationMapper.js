function destinationMapper(input) {

    let destinations = [];
    let travelPoints = 0;
    const pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(input);
    while (match !== null) {
        destinations.push(match[2]);
        match = pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    destinations.forEach(destination => {
        travelPoints += destination.length;
    });
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");