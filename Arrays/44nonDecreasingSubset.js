function nonDecreasingSubset(array) {
    let arrayL = array.length;
    let newArray = [];
    let bigestEl = 0;

    for (let i = 0; i < arrayL; i++) {
        let currentEl = array[i];

        if (currentEl >= bigestEl) {
            bigestEl = currentEl
            newArray.push(bigestEl);
        }
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);


//-----------------------------------------------------------

// let max = arr[0];
// let result = arr.filter(el => {
//     if (el >= max) {
//         max = el;
//     }
//     return el >= max;
// });
// console.log(result.join(' '));