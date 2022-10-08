function cinemaTickets(input) {

    //let filmName = input[0];
    //let freeSeats = Number(input[1]);

    let index = 0;
    let command = input[index];
    //let ticketCounter = 0;
    let studentTicket = 0;
    let kidTicket = 0;
    let standartdTicket = 0;
    let seatsHall = 0;
    let totalTicketCounter = 0;

    while (command !== 'Finish') {
        let filmName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        let ticketCounter = 0;
        while (ticketType !== 'End') {
            ticketCounter++;
            switch (ticketType) {
                case 'standard': standartdTicket++; break;
                case 'kid': kidTicket++; break;
                case 'student': studentTicket++; break;
            }
            if (ticketCounter >= freeSeats) {
                break;
            }
            ticketType = input[++index];
        }
        totalTicketCounter += ticketCounter
        seatsHall = ticketCounter / freeSeats * 100;


        console.log(`${filmName} - ${seatsHall.toFixed(2)}% full.`);
        command = input[++index];
    }
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${(studentTicket / totalTicketCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartdTicket / totalTicketCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / totalTicketCounter * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets([
    "Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End",
    "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);