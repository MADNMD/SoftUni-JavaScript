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


//------------------------------------------------------

    // let firstStr = input[0];
    // let secondStr = input[1];
    // let word = input[2];

    // let splitWord = word.split('');
    // let splitWordL = splitWord.length;

    // let allStr = firstStr + secondStr;
    // allStr = allStr.toLowerCase();
    // let arrayAllStr = allStr.split('');
    // let arrayAllStrL = arrayAllStr.length;
    // let vowelIndex = 0;
    // let reversePassword = [];

    // for (let i = 0; i < arrayAllStrL; i++) {
    //     let currentChar = arrayAllStr[i];
    //     if (currentChar === String.fromCharCode(97) || currentChar === String.fromCharCode(101) ||
    //         currentChar === String.fromCharCode(105) || currentChar === String.fromCharCode(111) ||
    //         currentChar === String.fromCharCode(117)) {
    //         let indexOfChar = vowelIndex % splitWordL;
    //         vowelIndex++;
    //         let currentChar = splitWord[indexOfChar];
    //         reversePassword.push(currentChar.toUpperCase());
    //     }else {
    //         reversePassword.push(arrayAllStr[i]);
    //     }
    // }
    // let result = reversePassword.reverse().join('');
    // console.log(`Your generated password is ${result}`);