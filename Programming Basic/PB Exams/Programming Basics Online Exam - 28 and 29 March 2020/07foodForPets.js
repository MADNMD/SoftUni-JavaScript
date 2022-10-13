function foodForPets(input) {

    let days = Number(input[0]);
    let allFood = Number(input[1]);
    let dayCounter = 0;
    let biscuits = 0;
    let eatingDogFood = 0;
    let eatingCatFood = 0;
    let allEatingFood = 0;
    let percentAllFood = 0;
    let sumBiscuits = 0
    let index = 2;

    for (let i = 1; i <= days; i++) {
        dayCounter++;
        let dogFood = Number(input[index++]);
        let catFood = Number(input[index++]);

        if (dayCounter % 3 === 0) {
            biscuits = (dogFood + catFood) * 0.1;
            sumBiscuits += biscuits;
        }

        eatingDogFood += dogFood;
        eatingCatFood += catFood;

        allEatingFood = eatingDogFood + eatingCatFood;
    }

    percentAllFood = (allEatingFood / allFood) * 100;
    eatingDogFood = (eatingDogFood / allEatingFood) * 100;
    eatingCatFood = (eatingCatFood / allEatingFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(sumBiscuits)}gr.`);
    console.log(`${percentAllFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatingDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatingCatFood.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);