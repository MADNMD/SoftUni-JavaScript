function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        //let buff = '';
        let buff = [];
        for (let j = 1; j <= i; j++) {
            //buff += `${i} `;
            buff.push(i);
        }
        console.log(buff.join(' '));
    }
}
triangleOfNumbers(5);