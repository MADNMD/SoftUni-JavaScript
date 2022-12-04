function messagesManager(input) {

    const arrayInput = input.slice();
    const maxMessages = Number(arrayInput.shift());
    const users = {};

    let line = arrayInput.shift();

    while (line !== 'Statistics') {

        let [command, ...data] = line.split('=');

        if (command === 'Add') {
            const userName = data[0];
            const sentMessages = Number(data[1]);
            const receivedMessages = Number(data[2]);

            if (!users[userName]) {
                users[userName] = {
                    sent: sentMessages,
                    received: receivedMessages,
                }
            }
        } else if (command === 'Message') {
            const nameSender = data[0];
            const nameReceiver = data[1];

            if (users[nameSender] && users[nameReceiver]) {
                users[nameSender].sent += 1;
                users[nameReceiver].received += 1;

                if ((users[nameSender].sent + users[nameSender].received) >= maxMessages) {
                    delete users[nameSender];
                    console.log(`${nameSender} reached the capacity!`);
                }

                if ((users[nameReceiver].sent + users[nameReceiver].received) >= maxMessages) {
                    delete users[nameReceiver];
                    console.log(`${nameReceiver} reached the capacity!`);
                }
            }

        } else if (command === 'Empty') {
            const userName = data[0];

            if (users[userName]) {
                delete users[userName];
            } else if (userName === 'All') {
                for (let user in users) {
                    delete users[user];
                }
            }
        }
        line = arrayInput.shift();
    }

    let count = Object.entries(users).length;
    console.log(`Users count: ${count}`);

    for (let user in users) {
        let allMessages = users[user].sent + users[user].received;
        console.log(`${user} - ${allMessages}`);
    }
}
// messagesManager([
//     "10",
//     "Add=Berg=9=0",
//     "Add=Kevin=0=0",
//     "Message=Berg=Kevin",
//     "Add=Mark=5=4",
//     "Statistics"]);

messagesManager([
    "20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]);

// solve([
//     "12",
//     "Add=Bonnie=3=5",
//     "Add=Johny=4=4",
//     "Empty=All",
//     "Add=Bonnie=3=3",
//     "Statistics"]);