function walking(input) {
    let target = 10000;
    index = 0;
    command = input[index];
    let stepCounter = 0;
    let totalSteps = 0;

    while (command !== 'Going home') {
        let steps = Number(command);
        stepCounter += steps;
        //index++
        //command = input[index];
        //totalSteps = stepCounter - target;

        if (stepCounter >= target) {
            //totalSteps = stepCounter - target;
            console.log("Goal reached! Good job!");
            console.log(`${stepCounter - target} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === 'Going home') {
        index++;
        let afterSteps = Number(input[index]);
        stepCounter += afterSteps;
        //console.log(`${Math.abs(totalSteps)} more steps to reach goal.`);
        if (stepCounter >= target) {
            //totalSteps = stepCounter - target;
            console.log("Goal reached! Good job!");
            console.log(`${stepCounter - target} steps over the goal!`);
        } else {
            console.log(`${target - stepCounter} more steps to reach goal.`);
        }
    }
}
walking(["1000", "1500", "2000", "6500"]);