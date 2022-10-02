function activationKeys(input) {

    let activationKey = input.shift();

    let line = input.shift();

    while (line !== 'Generate') {
        let [command, ...data] = line.split('>>>');

        if (command === 'Slice') {

            let stratIndex = Number(data[0]);
            let endIndex = Number(data[1]);
            let string = activationKey.substring(stratIndex, endIndex);
            activationKey = activationKey.replace(string, '');
            console.log(activationKey);

        } else if (command === 'Flip') {

            let upperOrLower = data[0];
            let startIndex = Number(data[1]);
            let endIndex = Number(data[2]);
            let replacedStr  = activationKey.substring(startIndex, endIndex);

            if (upperOrLower === 'Upper') {
                activationKey = activationKey.replace(replacedStr , replacedStr.toUpperCase());
                console.log(activationKey);
            } else if (upperOrLower === 'Lower') {
                activationKey = activationKey.replace(replacedStr , replacedStr.toLowerCase());
                console.log(activationKey);
            }

        } else if (command === 'Contains') {

            let subString = data[0];

            if (activationKey.includes(subString)) {
                console.log(`${activationKey} contains ${subString}`);
            } else {
                console.log("Substring not found!");
            }
        }
        line = input.shift();
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
// activationKeys(["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
