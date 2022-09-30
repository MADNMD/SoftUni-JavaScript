function secretChat(input) {
    let message = input.shift();

    let line = input.shift();

    while (line !== 'Reveal') {
        let [command, ...data] = line.split(':|:');
        if (command === 'ChangeAll') {
            let subStr = data[0];
            let replaceStr = data[1];
            message = message.split(subStr).join(replaceStr);
            console.log(message);
        } else if (command === 'Reverse') {
            let reverseStr = data.join('');
            if (message.includes(reverseStr)) {
                let index = message.indexOf(reverseStr);
                let secondPart = message
                    .substring(index, index + reverseStr.length)
                    .split('')
                    .reverse()
                    .join('');
                let firstPart = message.substring(0, index);
                let thirdPart = message.substring(index + reverseStr.length);
                message = firstPart + thirdPart + secondPart;
                console.log(message);
            } else {
                console.log('error');
            }

        } else if (command === 'InsertSpace') {
            let index = Number(data);
            message = message.substring(0, index) + ' ' + message.substring(index);
            console.log(message);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);

     //            reverse
    // if (message.includes(reverseStr)) {
    //     let index = message.indexOf(reverseStr);
    //     reverseStr = reverseStr.split('').reverse().join('');
    //     let subStr = message.slice(index);
    //     message = message.replace(subStr, reverseStr);
    //     console.log(message);
    // } else {
    //     console.log('error');
    // }
    //                  insertSpace
    // let index = Number(data);
    //         message = message.slice(0, index) + ' ' + message.slice(index);
    //         console.log(message);