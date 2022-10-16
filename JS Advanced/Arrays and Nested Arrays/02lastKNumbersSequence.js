function lastKNumbersSequence(n, k) {

    const numbersSequence = [1];
    const nNumber = n;
    const kNumber = k;

    for (let i = 1; i < nNumber; i++) {
        let lastK = numbersSequence.slice(-kNumber);
        let sum = 0;

        for (let num of lastK) {
            sum += Number(num);
        }
        numbersSequence.push(sum);
    }
    return numbersSequence;
}
lastKNumbersSequence(6, 3);
// [1, 1, 2, 4, 7, 13]
lastKNumbersSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]