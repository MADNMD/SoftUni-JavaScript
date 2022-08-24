function arrayOfMultiples(num, length) {

    let result = [];


    while (length !== 0) {
        let multiples = num * length;
        result.push(multiples);
        length--
    }
    console.log(result.reverse());
}
arrayOfMultiples(17, 6);