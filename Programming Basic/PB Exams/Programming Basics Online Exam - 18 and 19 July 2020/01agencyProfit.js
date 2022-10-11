function agencyProfit(input) {

    let nameAvio = input[0];
    let oldTicket = Number(input[1]);
    let kidTicket = Number(input[2]);
    let price = Number(input[3]);
    let serviceFee = Number(input[4]);

    let kidTicketPrice = price * 0.3;
    let oldTicketPrice = price + serviceFee;
    let totalKidTicketPrice = kidTicketPrice + serviceFee;
    let allTciketPrice = (kidTicket * totalKidTicketPrice) + (oldTicket * oldTicketPrice);
    let profit = allTciketPrice * 0.2;
    console.log(`The profit of your agency from ${nameAvio} tickets is ${profit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);