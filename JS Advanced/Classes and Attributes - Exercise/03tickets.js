function ticketsSorted(ticketsInfo, sortedCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = [];

    ticketsInfo.forEach(line => {
        let [destination, price, status] = line.split('|');
        let newTicket = new Ticket(destination, Number(price), status);
        result.push(newTicket);
    });

    if (sortedCriterion === 'price') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortedCriterion === 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortedCriterion === 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }
    return result;
}
ticketsSorted([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');