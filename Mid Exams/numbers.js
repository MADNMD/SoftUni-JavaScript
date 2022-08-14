function numbers(input) {

    let num = input.split(' ').sort((a, b) => a - b).reverse().map(Number);
    let maxSequence = [];
    let numL = num.length;
    let sumNumbers = num.reduce((a, b) => a + b, 0);
    let averegeNum = sumNumbers / numL;
    let tempSequence = [];
    tempSequence = num.filter(x => x > averegeNum);
    maxSequence = tempSequence.splice(0, 5);
    if(maxSequence.length <= 0){
        console.log('No');
    }
    console.log(maxSequence.join(' '));
}
numbers('1');