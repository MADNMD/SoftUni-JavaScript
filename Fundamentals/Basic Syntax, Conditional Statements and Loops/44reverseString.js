function reverseString(input) {
    let reversedWord = input.split('').reverse().join('');
    console.log(reversedWord);

}
reverseString('Hello');

//-----------------------------------------------------

// let word = input.split('');
// let wordL = word.length;
// let result = []
// for(let i = wordL -1; i >= 0; i--){
//     result.push(word[i])
// }
// console.log(result.join(''));