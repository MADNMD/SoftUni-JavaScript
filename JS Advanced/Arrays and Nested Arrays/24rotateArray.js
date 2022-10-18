function rotateArray(array, num) {

    const rotation = num;
    const rotationArray = array;

    for (let i = 0; i < rotation; i++) {
        let element = rotationArray.pop();
        rotationArray.unshift(element);
    }
    console.log(rotationArray.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);