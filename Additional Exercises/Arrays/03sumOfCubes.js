function sumOfCubes(array){

    let sum = 0;
    let arrayL = array.length;

    for(let i = 0; i < arrayL; i++){
        let currentNum = array[i];
        sum += Math.pow(currentNum,3);
    }
    console.log(sum);
}
sumOfCubes([]);