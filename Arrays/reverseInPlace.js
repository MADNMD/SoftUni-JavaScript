function reverseInplace(arr) {

    let arrayOfString = arr.reverse();
    console.log(arrayOfString.join(' '));

}
reverseInplace(['a', 'b', 'c', 'd', 'e']);

//     let myArr = [];
//     for(let i = arr.length; i >= 0; i--){
//         myArr.push(arr[i]);
//     }
//     console.log(myArr.join(' '));



// for(let i = 0; i < arr.length / 2; i++){
//     let oldElement = arr[i];
//     let previousIndex = arr.length -1 - i;
//     arr[i] = arr[previousIndex];
//     arr[previousIndex] = oldElement;
//  }
//  console.log(arr.join(' '));