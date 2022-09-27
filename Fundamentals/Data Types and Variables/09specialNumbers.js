function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let currentDigit = i;

        while (currentDigit > 0) {
            sum += currentDigit % 10;
            currentDigit = Math.floor(currentDigit / 10);
        }
        let isSpecial = '';

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }
        console.log(`${i} -> ${isSpecial}`);
    }
}
specialNumbers(15);