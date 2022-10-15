function squareOfStars(num) {
    let number = num;
    for (let i = 0; i < number; i++) {
        console.log('* '.repeat(number));
    }
}
squareOfStars(7);