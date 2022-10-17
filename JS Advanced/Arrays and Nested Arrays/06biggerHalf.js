function biggerHalf(array) {

const sortArray = array.sort((a, b) => a - b);
const index = Math.floor(sortArray.length / 2);
const secondHalf = sortArray.slice(index);
return secondHalf;
    
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);

    // let sortedArray = array.sort((a, b) => a - b);

    // const secondHalf = [];

    // for (let i = Math.floor(sortedArray.length / 2); i < sortedArray.length; i++) {
    //     secondHalf.push(sortedArray[i]);
    // }
    // return secondHalf;