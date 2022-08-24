function evenAllTheWay(array) {

    let arrayL = array.length;
    let result = [];

    for (let i = 0; i < arrayL; i++) {
        let currentNum = array[i];
        if(currentNum % 2 === 0 && i % 2 === 0){
            result.push(currentNum);
        }
    }
    console.log(result);
}
evenAllTheWay([0, 1, 2, 3, 4]);