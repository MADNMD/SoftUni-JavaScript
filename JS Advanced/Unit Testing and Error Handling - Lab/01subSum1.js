function subSum(numbers, index1, index2) {

    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = index1;
    let lastIndex = index2;

    if (startIndex < 0) {
        startIndex = 0;
    }
    if (lastIndex > numbers.length) {
        lastIndex = numbers.length;
    }

    const sumNumbers = numbers.slice(startIndex, lastIndex + 1)
        .reduce((a, b) => a + Number(b), 0);
    
    return sumNumbers;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);