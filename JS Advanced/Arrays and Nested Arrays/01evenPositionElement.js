function evenPositionElement(array) {

const result = array
.filter((parametar, index) => index % 2 === 0)
.join(' ');
console.log(result);
   
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['A', 'B']);
evenPositionElement(['5', '10']);

// const myArrayL = array.length;
// const result = [];
// for (let i = 0; i < myArrayL; i++) {
//     let currentElement = array[i];
//     if (i % 2 === 0) {
//         result.push(currentElement);
//     }
// }
// console.log(result.join(' '));