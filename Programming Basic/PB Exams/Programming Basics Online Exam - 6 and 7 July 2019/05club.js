function club(input) {

    let target = Number(input[0]);

    let cocktailName = input[1];

    let cocktailNum = Number(input[2]);

    let index = 1;

    let sum = 0;

    for (let i = 1; i <= cocktailName.length; i++) {

        let cocktailName = input[index];

        if (cocktailName === "Party!") {

            console.log(`We need ${(target - sum).toFixed(2)} leva more.`);
            break;
        }
        cocktailNum = Number(input[index + 1]);

        let cocktailPrice = cocktailName.length * cocktailNum;

        if (cocktailPrice % 2 !== 0) {

            cocktailPrice *= 0.75;
        }

        sum += cocktailPrice;

        index += 2;

        if (sum >= target) {
            break;
        }
    }
    if (sum < target) {
        console.log("Club income - " + sum.toFixed(2) + " leva.");
    } else {
        console.log("Target acquired.");

        console.log("Club income - " + sum.toFixed(2) + " leva.");
    }
}
club([
    "500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"]);