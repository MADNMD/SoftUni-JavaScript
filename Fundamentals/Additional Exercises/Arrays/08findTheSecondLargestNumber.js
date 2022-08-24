function findTheSecondLargestNumber(array) {

   let secondLargestNum = array.sort((a,b) => a - b).reverse().splice(1,1);
    console.log(secondLargestNum);
  
}
findTheSecondLargestNumber([54, 23, 11, 17, 10]);