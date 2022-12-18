function listProcessor(input) {

    const elements = input.slice();
    let words = [];

    elements.forEach(element => {
        let [command, word] = element.split(' ');

        if (command === 'add') {
            words.push(word);
        } else if (command === 'remove') {
             while (words.includes(word)) {
                const index = words.indexOf(word);
                words.splice(index, 1)
            }
        } else if (command === 'print') {
            console.log(words.join(','));
        }
    });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);