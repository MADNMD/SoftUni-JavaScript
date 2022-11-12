function censoredWords(text, word) {

   while(text.includes(word)){
    text = text.replace(word, '*'.repeat(word.length));
   }
   console.log(text);
}   
censoredWords('A small sentence with some small words', 'small');


// while (sentence.includes(word)) {
//    sentence = sentence.replace(word, word[0] + '*'.repeat(word.length - 1));    показва само първата буква на скритата дума
// }
// A s**** sentence with some words

//--------------------------------------------------

// text.replaceAll(word, '*'.repeat(word.length));
