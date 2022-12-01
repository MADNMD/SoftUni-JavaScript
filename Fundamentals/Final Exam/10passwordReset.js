function passwordReset(input) {

    const arrayInput = input.slice();
    let password = arrayInput.shift();

    let line = arrayInput.shift();

    while (line !== 'Done') {

        let [command, ...data] = line.split(' ');

        if (command === 'TakeOdd') {
            const passwordL = password.length;
            let tempPass = '';

            for (let i = 0; i < passwordL; i++) {

                if (i % 2 !== 0) {
                    tempPass += password[i];
                }
            }
            password = tempPass;
            console.log(password);

        } else if (command === 'Cut') {
            const index = Number(data[0]);
            const length = Number(data[1]);

            let firstHalf = password.substring(0, index);
            let secondHalf = password.substring(index + length);
            password = firstHalf.concat(secondHalf);
            // let string = password.substring(index, index + length); вторит вариант на изрязване на стринга!!!
            // password = password.replace(string, '');
            console.log(password);

        }else if(command === 'Substitute'){
            const str = data[0];
            const subStr = data[1];

            if(password.includes(str)){

                while(password.includes(str)){
                    password = password.replace(str, subStr);
                }
                console.log(password);
            }else{
                console.log('Nothing to replace!');
            }
        }

        line = arrayInput.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
