function solve(input){

    let obj = {};
    input.forEach(letter => obj[letter] = letter.toUpperCase());
    console.log(obj);
}
solve(["p", "s", "m"]);