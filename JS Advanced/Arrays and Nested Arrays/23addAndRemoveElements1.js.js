function addAndRemoveElements(array) {

    const result = [];

    array.forEach((el, index) => {
        if (el === 'add') {
            result.push(index + 1);
        } else if (el === 'remove') {
            result.pop();
        }
    });
    if (result.length === 0) {
        console.log('Empty');
    } else {
        result.forEach(num => console.log(num));
    }
}
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
addAndRemoveElements(['add', 'add', 'add', 'add']);


