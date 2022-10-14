function stringLength(arg1, arg2, arg3) {
    let fisrtArgumentLength = arg1.length;
    let secondArgumentLength = arg2.length;
    let thirdArgumentLength = arg3.length;
    let sumAllArg = fisrtArgumentLength + secondArgumentLength + thirdArgumentLength;
    let averageSum = Math.floor(sumAllArg / 3);
    console.log(sumAllArg);
    console.log(averageSum);
}
stringLength('chocolate', 'ice cream', 'cake');