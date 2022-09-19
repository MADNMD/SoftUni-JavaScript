function censoredWords(text, word) {

   while(text.includes(word)){
    text = text.replace(word, '*'.repeat(word.length));
   }
   console.log(text);
}   
censoredWords('A small sentence with some small words', 'small');


// let tokens = text.split(' ');
// for (let el of tokens) {
//     if (el.includes(word)) {
//         let index = tokens.indexOf(word);
//         tokens.splice(index, 1, '*'.repeat(word.length))
//     }
// }
// console.log(tokens.join(' '));

//--------------------------------------------------

// text.replaceAll(word, '*'.repeat(word.length));
