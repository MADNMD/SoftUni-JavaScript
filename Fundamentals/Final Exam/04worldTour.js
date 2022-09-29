function worldTour(input) {
    let travelRoute = input.shift();

    let lines = input.shift();
    while (lines !== 'Travel') {
        let tokens = lines.split(':');
        let command = tokens[0];

        if (command === 'Add Stop') {
            let index = Number(tokens[1]);
            let string = tokens[2];
            travelRoute = travelRoute.split('');
            travelRoute.splice(index, 0, string);
            travelRoute = travelRoute.join('');

        } else if (command === 'Remove Stop') {
            let stratIndex = Number(tokens[1]);
            let ednIndex = Number(tokens[2]);
            if (stratIndex >= 0 && stratIndex < travelRoute.length &&
                ednIndex >= 0 && ednIndex < travelRoute.length &&
                stratIndex <= ednIndex) {
                let removeDistination = travelRoute.substring(stratIndex, ednIndex + 1);
                travelRoute = travelRoute.replace(removeDistination, '');
            }
        } else if (command === 'Switch') {
            let oldString = tokens[1];
            let newString = tokens[2];
            let regex = new RegExp(oldString, 'g');
            travelRoute = travelRoute.replace(regex, newString)
        }
        console.log(travelRoute);
        lines = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${travelRoute}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);