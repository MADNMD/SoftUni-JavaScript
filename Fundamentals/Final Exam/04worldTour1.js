function worldTour(input) {

    const tripInput = input.slice();
    let myTrip = tripInput.shift();

    let line = tripInput.shift();

    while (line !== 'Travel') {

        let [command, ...info] = line.split(':');

        if (command === 'Add Stop') {
            const index = Number(info[0]);
            const town = info[1];
            myTrip = myTrip.split('');

            if (myTrip[index]) {
                myTrip.splice(index, 0, town);
                myTrip = myTrip.join('');
            }
        } else if (command === 'Remove Stop') {
            const startIndex = Number(info[0]);
            const ednIndex = Number(info[1]);

            if (myTrip[startIndex] && myTrip[ednIndex]) {
                const first = myTrip.substring(0, startIndex);
                const second = myTrip.substring(ednIndex + 1);
                myTrip = first + second;
            }
        } else if (command === 'Switch') {
            const oldTown = info[0];
            const newTown = info[1];

            if (myTrip.includes(oldTown)) {
                myTrip = myTrip.replace(oldTown, newTown);
            }
        }
        console.log(myTrip);
        line = tripInput.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${myTrip}`);
}
// worldTour([
//     "Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);

worldTour(["Albania:Bulgaria:Cyprus:Deuchland:Bulgaria",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);