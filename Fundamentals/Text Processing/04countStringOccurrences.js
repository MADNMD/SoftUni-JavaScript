function countStringOccurrences(text, word) {

    let token = text.split(' ');
    let counter = token.filter(x => x === word);
    console.log(counter.length);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');

//-----------------------------------------------

// let token = text.split(' ');
//     let counter = 0;
//     token = token.filter(x => {
//         if (x === word) {
//             counter++;
//         }
//         return counter;
//     })
//     console.log(counter);
