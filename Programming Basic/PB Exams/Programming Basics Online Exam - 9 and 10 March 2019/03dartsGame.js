function darts(input) {
    let index = 0;
    let name = input[index++];
    let successfulShotCounter = 0;
    let unsuccessfulShotCounter = 0;
    let scoreCounter = 301;

    while (scoreCounter !== 0) {
        let command = input[index++];
        if (command === 'Retire') {
            console.log(`${name} retired after ${unsuccessfulShotCounter} unsuccessful shots.`);
            break;
        }
        let sum = Number(input[index]);
        switch (command) {
            case 'Single':
                successfulShotCounter++;
                scoreCounter -= sum;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum;
                }
                break;
            case 'Double':
                successfulShotCounter++;
                scoreCounter -= sum * 2;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum * 2;
                }
                break;
            case 'Triple':
                successfulShotCounter++;
                scoreCounter -= sum * 3;
                if (scoreCounter < 0) {
                    successfulShotCounter--;
                    unsuccessfulShotCounter++;
                    scoreCounter += sum * 3;
                }
                break;
        }
        command = input[index++];

    }
    if (scoreCounter === 0) {
        console.log(`${name} won the leg with ${successfulShotCounter} shots.`);
    }
}
darts([
    "Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3",
    "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]);