function highJump(input) {

    let targetJump = Number(input[0]);
    let jumpsCounter = 0;
    let index = 1;
    let attmeps = 0;
    let startTren = targetJump - 30;

    while (startTren <= targetJump) {
        let jumps = Number(input[index]);
        jumpsCounter++;

        if (jumps > startTren) {
            startTren += 5;
            attmeps = 0;
        } else {
            attmeps++;
        }

        if (attmeps === 3) {
            break;
        }
        index++;
    }
    if (attmeps === 3) {
        console.log(`Tihomir failed at ${startTren}cm after ${jumpsCounter} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${targetJump}cm after ${jumpsCounter} jumps.`);
    }
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);