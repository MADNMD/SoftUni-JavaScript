function passwordReset(input) {

    let password = input.shift();

    let line = input.shift();
    while (line !== 'Done') {

        let [command, ...data] = line.split(' ');

        if (command === 'TakeOdd') {
            password = password.split('');
            let newPassword = '';
            let passwordL = password.length;
            for (let i = 0; i < passwordL; i++) {
                if (i % 2 !== 0) {
                    newPassword += password[i];
                }
            }
            password = newPassword
            console.log(password);
        } else if (command === 'Cut') {
            let index = Number(data[0]);
            let length = Number(data[1]);
            let string = password.substring(index, index + length);
            password = password.replace(string, '');
            // let firstPart = password.substring(0, index);
            // let secondPart = password.substring(index);
            // let thirdPart = secondPart.substring(length);
            // password = firstPart + thirdPart

            console.log(password);
        } else if (command === 'Substitute') {
            let subStr = data[0];
            let substitute = data[1];
            if (password.includes(subStr)) {
                while (password.includes(subStr)) {
                    password = password.replace(subStr, substitute);
                }
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);