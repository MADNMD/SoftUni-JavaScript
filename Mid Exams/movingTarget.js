function movingTarget(array) {

    let target = array.shift().split(' ').map(x => Number(x));

    for (const element of array) {
        let splitElement = element.split(' ');
        let command = splitElement[0];

        if (command === 'Shoot') {
            let index = Number(splitElement[1]);
            let givenPower = Number(splitElement[2]);
            if (index >= 0 && index < target.length) {
                target[index] -= givenPower;
                if (target[index] <= 0) {
                    target.splice(index, 1);
                }
            }
        } else if (command === 'Strike') {
            let index = Number(splitElement[1]);
            let radius = Number(splitElement[2]);
            if (index >= 0 && index < target.length) {
                if (index - radius >= 0 && index + radius < target.length) {
                    target.splice(index - radius, radius + radius + 1);
                } else {
                    console.log(`Strike missed!`);
                }
            }
        } else if (command === 'Add') {
            let index = Number(splitElement[1]);
            let value = Number(splitElement[2]);
            if (index >= 0 && index < target.length) {
                target.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === 'End') {
            console.log(target.join('|'));
        }
    }
}
movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]);