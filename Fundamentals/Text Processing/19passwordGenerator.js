function passwordGenerator(input) {

    let [firstStr, secondStr, word] = input;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let combinatedStr = firstStr.concat(secondStr);
    let combinatedStrL = combinatedStr.length;
    let reversedPasswrod = '';
    word = word.toLowerCase();

    let vowelIndes = 0;

    for (let i = 0; i < combinatedStrL; i++) {
        if (vowels.includes(combinatedStr[i])) {
            let indexOfChar = vowelIndes % word.length;
            vowelIndes++;
            let currentChar = word.charAt(indexOfChar);
            reversedPasswrod += currentChar.toUpperCase();
        } else {
            reversedPasswrod += combinatedStr[i];
        }
    }
    let password = reversedPasswrod.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
