function easterParty(input) {

    let guest = Number(input[0]);
    let peoplePrice = Number(input[1]);
    let budget = Number(input[2]);

    if (guest >= 10 && guest <= 15) {
        peoplePrice *= 0.85;
    } else if (guest > 15 && guest <= 20) {
        peoplePrice *= 0.80
    } else if (guest > 20) {
        peoplePrice *= 0.75;
    }

    let cake = budget * 0.1;

    let allPriceParty = guest * peoplePrice + cake;

    if (budget >= allPriceParty) {
        console.log(`It is party time! ${Math.abs(allPriceParty - budget).toFixed(2)} leva left.`);
    } else if (allPriceParty >= budget) {
        console.log(`No party! ${Math.abs(budget - allPriceParty).toFixed(2)} leva needed.`);
    }
    allPriceParty - budget
}
easterParty(["18", "30", "450"]);