function sameNumbers(num) {

    let sum = 0;
    let isSame = num.toString().split('').map(Number)
    sum = isSame.slice().reduce((a, b) => a + b, 0);
    isSame = isSame.every((value, index, arr) => value === arr[0]);

    if (isSame) {
        console.log(isSame);
    } else {
        console.log(isSame);
    }
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);