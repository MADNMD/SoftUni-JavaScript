function easterGuests(input) {

    let guest = Number(input[0]);
    let budget = Number(input[1]);

    let bread = Math.ceil(guest / 3);
    let eggs = guest * 2;

    let breadPrice = bread * 4;
    let eggsPrice = eggs * 0.45;
    let allPrice = breadPrice + eggsPrice;

    if (budget >= allPrice) {
        console.log(`Lyubo bought ${bread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${Math.abs(budget - allPrice).toFixed(2)} lv. left.`);
    } else if (budget <= allPrice) {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${Math.abs(allPrice - budget).toFixed(2)} lv. more.`);
    }
}
easterGuests(["10", "35"]);