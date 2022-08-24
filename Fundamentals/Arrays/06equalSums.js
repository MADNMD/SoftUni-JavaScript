function equalSums(array) {
    let arrayL = array.length;
    let results = 'no';

    for (let i = 0; i < arrayL; i++) {

        let leftSum = 0;
        let rigthSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }
        for (let r = arrayL - 1; r > i; r--) {
            rigthSum += array[r];
        }
        if(leftSum === rigthSum){
            results = i;
            break;
        }
    }
    console.log(results);
}
equalSums([1]);
//equalSums([1, 2, 3, 3]);
//equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//equalSums([1, 2, 3]);