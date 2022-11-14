function passwordGenerator(input) {

    let firstWord = input[0];
    let secondWord = input[1];
    let word = input[2].toUpperCase();
    let concatWords = firstWord.concat(secondWord);
    let vowelIndex = 0;
    const reversedPassword = [];

    for (let char of concatWords) {
        if (char.charCodeAt() === 97 || char.charCodeAt() === 101 || char.charCodeAt() === 105 ||
            char.charCodeAt() === 111 || char.charCodeAt() === 117) {
                let charIndex = vowelIndex % word.length;
                vowelIndex++;
                reversedPassword.push(word[charIndex]);
        }else{
            reversedPassword.push(char);
        }
    }
    console.log(`Your generated password is ${reversedPassword.reverse().join('')}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);