function filmPremiere(input) {

    let index = 0;
    let command = input[index];
    let StudentTicket = 0;
    let StandartTicket = 0;
    let KidTicket = 0;
    let totalTicketCounter = 0

    while (command !== 'Finish') {

        let ticketCounter = 0;
        let percentHall = 0;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let typeTicket = input[index];
        while (typeTicket !== 'End') {

            ticketCounter++;

            if (typeTicket === 'standard') {
                StandartTicket++;
            } else if (typeTicket === 'student') {
                StudentTicket++;
            } else if (typeTicket === 'kid') {
                KidTicket++;
            }

            if (ticketCounter >= freeSeats) {
                break;
            }
            ++index;
            typeTicket = input[index];
        }

        totalTicketCounter += ticketCounter;
        percentHall = ticketCounter / freeSeats * 100;

        console.log(`${command} - ${percentHall.toFixed(2)}% full.`);

        command = input[++index];
    }

    let standartPercent = StandartTicket / totalTicketCounter * 100;
    let studentPercent = StudentTicket / totalTicketCounter * 100;
    let kidPercent = KidTicket / totalTicketCounter * 100;

    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standartPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);