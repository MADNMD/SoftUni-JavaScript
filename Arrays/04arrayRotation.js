function arrayRotation(arr, rtt) {

    let myArray = arr;
    let rotation = rtt;

    for (let i = 0; i < rotation; i++) {
        let currentElement = myArray.shift();
        myArray.push(currentElement);
    }
    console.log(myArray.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);

//------------------------------------------------------------------------------------

// while(rotations > 0){
//     let moveElement = array1.shift();
//     array1.push(moveElement);
//     rotations--;
// }
// console.log(array1);