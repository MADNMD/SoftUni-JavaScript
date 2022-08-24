function equalArrays(arr1, arr2) {

    let firstArray = arr1;
    let secondArray = arr2;
    let firstArrayL = firstArray.length;
    let sumOfAllArray = 0;

    for (let i = 0; i < firstArrayL; i++) {
    
          if(firstArray[i] !== secondArray[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
          }
          sumOfAllArray += Number(firstArray[i]);        
    }
    console.log(`Arrays are identical. Sum: ${sumOfAllArray}`);
}
equalArrays(['10','20','30'], ['10','20','30']);