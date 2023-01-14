function printEveryNthElementFromAnArray(array, step) {

    const result = [];

    for(let i = 0; i < array.length; i++){
        if(i % step === 0){
            result.push(array[i]);
        }   
    }
    return result;
}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);