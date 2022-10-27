function solve(input) {

    let consumativ = input.map(x => Number(x) * 1000);
    let food = Number(consumativ.shift());
    let hay = Number(consumativ.shift());
    let cover = Number(consumativ.shift());
    let guineaWeght = Number(consumativ.shift());
    const foodForADayGr = 300;
    let days = 30;
    let day = 0;
    let restConsumativ = []

    for (let i = 0; i < days; i++) {
        day++;

        food -= foodForADayGr;

        if (day % 2 === 0) {
            hay = hay - (food / 100 * 5);
        }
        if (day % 3 === 0) {
            cover = cover - (guineaWeght / 3);
        }
    }
    restConsumativ.push(food, hay, cover);
    restConsumativ = restConsumativ.map(x => x / 1000);

    if (restConsumativ[0] >= 0 && restConsumativ[1] >= 0 && restConsumativ[2] >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${restConsumativ[0].toFixed(2)}, Hay: ${restConsumativ[1].toFixed(2)}, Cover: ${restConsumativ[2].toFixed(2)}.`);
    } else if (restConsumativ[0] > 0 || restConsumativ[1] > 0 || restConsumativ[2] > 0) {
        console.log("Merry must go to the pet store!");
    }
}
//solve(["10", "5", "5.2", "1"]);
solve(["1", "1.5", "3", "1.5"]);
