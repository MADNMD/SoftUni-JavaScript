function biggerHalf(array) {

const sortArray = array.sort((a, b) => a - b);
const index = Math.floor(sortArray.length / 2);
const secondHalf = sortArray.slice(index);
return secondHalf;
    
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
