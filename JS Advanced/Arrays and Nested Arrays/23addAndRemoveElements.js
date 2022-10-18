function addAndRemoveElements(array) {

    const arrayL = array.length;
    const result = [];

    for (let i = 0; i < arrayL; i++) {
        let command = array[i];

        if (command === 'add') {
            result.push(i + 1);
        } else if (command === 'remove') {
            result.pop();
        }
    }
    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
}
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);