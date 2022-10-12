function easterBake(input) {

    let bread = Number(input[0]);
    let index = 1;
    let allSugar = 0;
    let allFlour = 0;
    let maxS = 0;
    let maxF = 0;
    let sugatCounter = 0;
    let flourCounter = 0;

    for (let i = 1; i <= bread; i++) {

        let sugar = Number(input[index++]);
        let flour = Number(input[index++]);

        if (sugar > maxS) {
            maxS = sugar;
        }
        if (flour > maxF) {
            maxF = flour;
        }
        allSugar += sugar;
        allFlour += flour;
    }
    sugatCounter = allSugar / 950;
    flourCounter = allFlour / 750;
    console.log(`Sugar: ${Math.ceil(sugatCounter)}`);
    console.log(`Flour: ${Math.ceil(flourCounter)}`);
    console.log(`Max used flour is ${maxF} grams, max used sugar is ${maxS} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);