function sumFirstAndLast(array){

    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let result = firstElement + lastElement;
    console.log(result);
}
sumFirstAndLast(['20', '30', '40']);