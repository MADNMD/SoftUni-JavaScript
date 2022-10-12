function easterEggs(input) {

    let index = 1;
    let paintEgg = Number(input[0]);
    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let max = 0;
    let paintFinal = '';
    let paint = '';

    for (let i = 1; i <= paintEgg; i++) {
        paint = input[index++];

        if (paint === 'red') {
            redCounter++;
        } else if (paint === 'orange') {
            orangeCounter++;
        } else if (paint === 'blue') {
            blueCounter++;
        } else if (paint === 'green') {
            greenCounter++;
        }
        if (redCounter > max) {
            max = redCounter;
            paintFinal = 'red';
        } else if (orangeCounter > max) {
            max = orangeCounter;
            paintFinal = 'orange';
        } else if (blueCounter > max) {
            max = blueCounter;
            paintFinal = 'blue';
        } else if (greenCounter > max) {
            max = greenCounter;
            paintFinal = 'green';
        }
    }
    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greenCounter}`);
    console.log(`Max eggs: ${max} -> ${paintFinal}`);
}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);