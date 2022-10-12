function catWalking(input) {

    let minWlaking = Number(input[0]);
    let counterWalking = Number(input[1]);
    let dayCalorie = Number(input[2]);

    let allWalkingTime = counterWalking * minWlaking;
    let burnedCalorie = allWalkingTime * 5;
    dayCalorie /= 2;

    if (burnedCalorie >= dayCalorie) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalorie}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalorie}.`);
    }
}
catWalking(["30", "3", "600"]);