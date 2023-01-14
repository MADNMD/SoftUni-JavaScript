function evenPositionElement(array) {

    const myArrayL = array.length;
    const result = [];
    for (let i = 0; i < myArrayL; i++) {
        let currentElement = array[i];
        if (i % 2 === 0) {
            result.push(currentElement);
        }
    }
    console.log(result.join(' '));

}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['A', 'B']);
evenPositionElement(['5', '10']);