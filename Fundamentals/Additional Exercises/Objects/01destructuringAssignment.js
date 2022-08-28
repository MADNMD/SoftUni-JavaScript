function destructuringAssignment(array){
let[first,second,third, ...other] = array;
console.log(other);
}
destructuringAssignment([1, 2, 3, 4, 5, 6, 7, 8]);