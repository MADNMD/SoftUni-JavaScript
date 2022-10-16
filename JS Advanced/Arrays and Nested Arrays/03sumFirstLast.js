function sumFirstLast(array) {

    const firstNumber = Number(array.shift());
    const lastNumber = Number(array.pop());
    const result = firstNumber + lastNumber;
    return result;

}
sumFirstLast(['20', '30', '40']);