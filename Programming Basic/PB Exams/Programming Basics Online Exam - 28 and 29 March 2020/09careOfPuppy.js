function careOfPuppy(input) {

    let allFoodKg = Number(input[0]);
    let allFood = allFoodKg * 1000;
    let eatFood = 0;
    let leftoverFood = 0;

    let index = 1;
    let command = input[index];

    while (command !== 'Adopted') {
        let foodOfDay = Number(input[index]);

        eatFood += foodOfDay;

        index++;
        command = input[index];
    }
    leftoverFood = allFood - eatFood;

    if (allFood >= eatFood) {
        console.log(`Food is enough! Leftovers: ${leftoverFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(leftoverFood)} grams more.`);
    }
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);