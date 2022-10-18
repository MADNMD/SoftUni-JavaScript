function printEveryNthElementFromAnArray(array, step) {

    const arrayL = array.length;
    const result = [];

    for (let i = 0; i < arrayL; i += step) {
        result.push(array[i]);
    }
    return result;
}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);