function poolDay(input) {

    let numberOfPeople = Number(input[0]);
    let entry = Number(input[1]);
    let deckChair = Number(input[2]);
    let umbrella = Number(input[3]);

    let allEntryPrice = numberOfPeople * entry;
    let peopleDeckChair = Math.ceil(numberOfPeople * 0.75);
    let totalDechChair = peopleDeckChair * deckChair;
    let peopleUmbrella = Math.ceil(numberOfPeople * 0.50);
    let totalUmbrella = peopleUmbrella * umbrella;

    let totalPrice = allEntryPrice + totalDechChair + totalUmbrella;
    console.log(totalPrice.toFixed(2) + ' lv.');
}
poolDay([
    "21",
    "5.50",
    "4.40",
    "6.20"]);