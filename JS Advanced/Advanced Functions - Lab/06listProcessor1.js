function listProcessor(input) {

    const inputElements = input.slice();
    let words = [];

    let result = {
        add(string) {
            words.push(string)
        },
        remove(string) {
            words = words.filter((word) => word !== string)
        },
        print() {
            console.log(words.join(','))
        }
    };

    inputElements.forEach(element => {
        let [command, value] = element.split(' ');
        result[command](value);
    });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);