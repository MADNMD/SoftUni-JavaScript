function solve(input) {

    let sequenceTarget = input.shift().split(' ').map(Number);

    let line = input.shift();

    while (line !== 'End') {

        let [command, ...data] = line.split(' ');
        const index = Number(data[0]);

        if (command === 'Shoot') {
            if (sequenceTarget[index]) {
                let givenPower = Number(data[1]);
                sequenceTarget[index] -= givenPower;
                if (sequenceTarget[index] <= 0) {
                    sequenceTarget.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            let value = Number(data[1]);
            if (sequenceTarget[index]) {
                sequenceTarget.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === 'Strike') {
            let radius = Number(data[1]);
            if (sequenceTarget[index]) {
                if (index - radius >= 0 && index + radius < sequenceTarget.length) {
                    sequenceTarget.splice(index - radius, radius + radius + 1);
                } else {
                    console.log(`Strike missed!`);
                }
            }
        }
        line = input.shift();
    }
    console.log(sequenceTarget.join('|'));
}
solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

// solve(["1 2 3 4 5",
//     "Strike 0 1",
//     "End"]);    