function cinema(input) {

    let seatsHall = Number(input[0]);
    let ticketPrice = 5;
    let allTicketPrice = 0;
    let seatsCounter = 0;
    let discount = 5;

    let index = 1;
    let command = input[index];

    while (command !== 'Movie time!') {
        let peopleComingHall = Number(input[index]);
        seatsCounter += peopleComingHall;
        if (seatsCounter > seatsHall) {
            break;
        }
        allTicketPrice += peopleComingHall * ticketPrice;

        if (peopleComingHall % 3 === 0) {
            allTicketPrice -= discount;
        }
        index++;
        command = input[index];
    }
    if (command === 'Movie time!') {
        console.log(`There are ${seatsHall - seatsCounter} seats left in the cinema.`);
    }
    if (seatsCounter > seatsHall) {
        console.log("The cinema is full.");
    }
    console.log(`Cinema income - ${allTicketPrice} lv.`);
}
cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);