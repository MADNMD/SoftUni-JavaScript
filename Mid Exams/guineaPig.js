function guineaPig(input) {

    let array = input.map(x => x * 1000);
    let foodGR = Number(array.shift());
    let hayGR = Number(array.shift());
    let coverGR = Number(array.shift());
    let days = 30;
    let guineaPigWeightInGR = Number(array.shift());
    guineaPigWeightInGR /= 3;
    let daysCounter = 0;

    while (days !== 0) {
        daysCounter++;
        foodGR -= 300;
        if (daysCounter % 2 === 0) {
            let percentHay = foodGR / 100 * 5;
            hayGR -= percentHay;
        }
        if (daysCounter % 3 === 0) {
            coverGR -= guineaPigWeightInGR;
        }
        days--;
    }
    let foodKG = foodGR / 1000;
    let hayKG = hayGR / 1000;
    let coverKG = coverGR / 1000;
    if (foodGR >= 0 && hayGR >= 0 && coverGR >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKG.toFixed(2)}, Hay: ${hayKG.toFixed(2)}, Cover: ${coverKG.toFixed(2)}.`);
    } else if (foodGR > 0 || hayGR > 0 || coverGR > 0) {
        console.log("Merry must go to the pet store!");
        
    }
}
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
;