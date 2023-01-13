function rotateArray(array, numRotate) {

    const result = [];

    while (numRotate !== 0) {

        let element = array.pop();
        array.unshift(element);
        numRotate--;

    }
    console.log(array.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
rotateArray(['1', '2', '3', '4'], 2);