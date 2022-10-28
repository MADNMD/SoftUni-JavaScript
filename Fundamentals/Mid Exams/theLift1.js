function solve(input) {

    let people = Number(input.shift());
    let wagons = input
        .toString()
        .split(' ')
        .map(Number);
    const wagonsL = wagons.length;
    let currentWagon = 0;
    let peopleInTheQueue = people;

    for (let i = 1; i <= people; i++) {
        let currentPeople = i;

        for (let j = 0; j < wagonsL; j++) {

            currentWagon = wagons[j];

            if (currentWagon < 4) {
                wagons[j] = currentWagon + 1;
                peopleInTheQueue--;
                break;
            }
        }
    }
    if (peopleInTheQueue === 0 && wagons.every(x => x === 4)) {
        console.log(wagons.join(' '));
    } else if (peopleInTheQueue === 0) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${peopleInTheQueue} people in a queue!`);
        console.log(wagons.join(' '));
    }
}
solve(["15", "0 0 0 0 0"]);
solve(["20", "0 2 0"]);