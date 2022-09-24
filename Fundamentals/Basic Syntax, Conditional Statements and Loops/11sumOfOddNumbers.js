function sumOfOddNumbers(number) {
    let counter = 0;
    let sum = 0;
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
        counter++;
        sum += i;
        if (counter === number) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
sumOfOddNumbers(5);

//-------------------------------------------------

// let sum = 0;
//     let counter = 0;
//     let index = 1;
//     while (index <= 100) {
//         console.log(index);
//         counter++;
//         sum += index;
//         if (counter === num) {
//             console.log(`Sum: ${sum}`);
//             break;
//         }
//         index += 2;