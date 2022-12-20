function sortArray(array, string) {

    const numbers = array.slice();
    const command = string;

    if (command === 'desc') {
        numbers.sort((a, b) => b - a);
    } else if (command === 'asc') {
        numbers.sort((a, b) => a - b);
    }
    return (numbers);
}
sortArray([14, 7, 17, 6, 8], 'desc');
sortArray([14, 7, 17, 6, 8], 'asc');