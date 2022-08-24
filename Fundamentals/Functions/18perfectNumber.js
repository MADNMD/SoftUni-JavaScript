function perfectNumber(number) {

    function searchPerfectNumber(num) {
        let searchingNum = 0;
        for (let i = 0; i < num; i++) {
            if (number % i === 0) {
                searchingNum += i;
            }
        }
        return searchingNum;
    }

    let perfectNum = searchPerfectNumber(number);

    if (perfectNum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6);