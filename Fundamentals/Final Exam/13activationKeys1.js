function activationKeys(input) {

    const arrayInput = input.slice();
    let activationKey = arrayInput.shift();

    let line = arrayInput.shift();

    while (line !== 'Generate') {

        let [command, ...data] = line.split('>>>');

        if (command === 'Contains') {
            const string = data[0];

            if (activationKey.includes(string)) {
                console.log(`${activationKey} contains ${string}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            const upperOrLower = data[0];
            const stratIndex = Number(data[1]);
            const endIndex = Number(data[2]);
            let firstHalf = activationKey.substring(0, stratIndex);
            let secondHalf = activationKey.substring(stratIndex, endIndex);
            let thridHalf = activationKey.substring(endIndex);

            if (upperOrLower === 'Upper') {
                secondHalf = secondHalf.toUpperCase();
            } else if (upperOrLower === 'Lower') {
                secondHalf = secondHalf.toLowerCase();
            }
            activationKey = firstHalf + secondHalf + thridHalf;
             console.log(activationKey);
        } else if (command === 'Slice') {
            const stratIndex = Number(data[0]);
            const endIndex = Number(data[1]);

           let firstHalf = activationKey.substring(0, stratIndex);
           let secondHalf = activationKey.substring(endIndex);
           activationKey = firstHalf + secondHalf;
            console.log(activationKey);
        }

        line = arrayInput.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);