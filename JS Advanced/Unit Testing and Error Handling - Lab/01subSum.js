function subSum(numbers, index1, index2) {

    if (!Array.isArray(numbers)) {
        return NaN;
    }

    const startIndex = Math.max(index1, 0);
    const ednIndex = Math.min(index2, numbers.length - 1);

    let sumNumbers = numbers.slice(startIndex, ednIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b, 0);
    return sumNumbers;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);